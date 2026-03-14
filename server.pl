use IO::Socket::INET;

my $port = 8000;
my $server = IO::Socket::INET->new(
    LocalPort => $port,
    Type      => SOCK_STREAM,
    ReuseAddr => 1,
    Listen    => 5
) or die "Cannot bind to port $port: $!";

print "HTTP server running on http://localhost:$port\n";
$| = 1;

while (1) {
    my $client = $server->accept() or next;

    my $req = '';
    while (my $line = <$client>) {
        $req .= $line;
        last if $line =~ /^\r?\n$/;
    }

    my ($path) = $req =~ /GET\s+(\S+)/;
    $path //= '/';
    $path =~ s/\?.*//;
    $path =~ s/%([0-9A-Fa-f]{2})/chr(hex($1))/ge;
    $path = '/index.html' if $path eq '/';

    my $file = '.' . $path;

    if (-f $file) {
        my ($ext) = $file =~ /\.([^.]+)$/;
        my %types = (
            html => 'text/html; charset=utf-8',
            css  => 'text/css',
            js   => 'application/javascript',
            jpg  => 'image/jpeg',
            jpeg => 'image/jpeg',
            png  => 'image/png',
            svg  => 'image/svg+xml',
            gif  => 'image/gif',
            ico  => 'image/x-icon',
        );
        my $type = $types{ lc($ext // '') } // 'application/octet-stream';

        open( my $fh, '<:raw', $file ) or do {
            print $client "HTTP/1.1 500 Error\r\n\r\n";
            close $client;
            next;
        };
        local $/;
        my $content = <$fh>;
        close $fh;

        print $client "HTTP/1.1 200 OK\r\n";
        print $client "Content-Type: $type\r\n";
        print $client "Content-Length: " . length($content) . "\r\n";
        print $client "Connection: close\r\n\r\n";
        print $client $content;
    } else {
        my $body = "404 Not Found: $path";
        print $client "HTTP/1.1 404 Not Found\r\nContent-Length: "
          . length($body) . "\r\n\r\n$body";
    }

    close $client;
}
