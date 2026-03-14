# מתחילים לדבר — Design System Specification

**Business:** מתחילים לדבר  
**Owner:** נועה פרידמן — Speech-Language Pathologist (קלינאית תקשורת)  
**Language:** Hebrew (RTL) — Full right-to-left layout  
**Primary Font:** Assistant (Google Font)  
**Platform:** Web — Responsive (Mobile, Tablet, Desktop)  
**Framework:** Tailwind CSS + Vanilla JS + Petite Vue

---

## 🎯 Design Principles

| Principle | Description |
|-----------|-------------|
| **Warm & Professional** | Colors evoke trust and warmth |
| **Minimalist Elegance** | Abundant whitespace, no clutter |
| **Accessibility** | All text meets WCAG AA contrast (4.5:1 minimum) |
| **Performance** | Lazy-loaded images, animations 300–700ms |
| **Consistency** | Reusable components across all pages |
| **RTL Native** | Hebrew-first design — not a retrofit |
| **Smooth Interactions** | Cubic-bezier easing for natural feel |

---

## 📐 Color Palette

> **Rule:** Never use hardcoded hex values — always reference the Tailwind color token system.

```javascript
// Tailwind Color Configuration
colors: {
  warm: {
    50:  '#FAF7F2',  // Lightest warm cream — main background
    100: '#F2EEE7',  // Very light beige
    200: '#E8E2D9',  // Light warm
    300: '#D9D2C7',  // Medium light
    400: '#C4B8AD',  // Medium
    500: '#A89080',  // Muted warm
    600: '#9B8B7E',  // Warm mid-tone
    700: '#7D6F67',  // Warm dark
    800: '#5A524D',  // Very dark
    900: '#3D3530',  // Darkest (near-black body text)
  },
  taupe: {
    DEFAULT: '#A37D6A',  // Primary accent — warm rust/taupe
    dark:    '#8B6A5A',  // Hover state
    light:   '#C1A496',  // Light backgrounds
  },
  sage: {
    DEFAULT: '#71A383',  // Secondary accent — calm sage green
    dark:    '#5F9170',  // Hover state
    light:   '#E8F0EB',  // Section backgrounds
    pale:    '#F0F6F2',  // Rarely used
  },
  text: {
    primary:   '#3D3530',  // Deep espresso — body text
    secondary: '#7A6F68',  // Muted secondary text
    light:     '#A89080',  // Muted/placeholder text
  },
}
```

### Color Usage Reference

| Element | Tailwind Class | Notes |
|---------|---------------|-------|
| Main background | `bg-warm-50` | Full page background |
| Primary CTA buttons | `bg-sage text-white` | "הצטרפו לקהילה", "לרכישת הספר" |
| Secondary buttons | `border-sage text-sage` | Ghost / outline style |
| Hero section background | `bg-taupe` | Dark taupe background |
| Hero text | `text-white` / `text-warm-50/90` | Light text on taupe |
| Card background | `bg-white` | Service cards, testimonials |
| Card hover shadow | `shadow-lg shadow-taupe/15` | Soft taupe shadow |
| Section accent background | `bg-sage-light` / `bg-taupe/10` | Light tinted sections |
| Body text | `text-warm-900` | All primary body copy |
| Secondary text | `text-warm-600/80` | Subtext, muted labels |

---

## 📝 Typography

### Font Import

```html
<link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

```css
* { font-family: 'Assistant', sans-serif; }
```

### Type Scale

| Element | Size | Weight | Line Height | Usage |
|---------|------|--------|-------------|-------|
| H1 | `2.25rem–3.75rem` | 700–900 | 1.2–1.3 | Page main headlines |
| H2 | `1.875rem–2.5rem` | 700–900 | 1.2–1.3 | Section headings |
| H3 | `1.25rem–1.5rem` | 700 | 1.3 | Card headings, subsections |
| Body | `1rem–1.125rem` | 300–400 | 1.6–1.8 | Paragraph text |
| Label / Badge | `0.75rem–0.875rem` | 500–600 | 1.2 | Section labels, buttons |
| Small | `0.75rem` | 400 | 1.5 | Fine print, timestamps |

### Font Weight Reference

| Class | Weight | Use |
|-------|--------|-----|
| `font-light` | 300 | Body paragraphs, low emphasis |
| `font-normal` | 400 | Body copy |
| `font-medium` | 500 | Buttons, labels, emphasis |
| `font-semibold` | 600 | CTA text, strong emphasis |
| `font-bold` | 700 | Subheadings, card titles |
| `font-black` | 900 | Max emphasis (use sparingly) |

---

## 🖇️ Spacing & Layout

### Section Padding

```css
py-20 lg:py-28   /* 80px mobile → 112px desktop */
px-6 lg:px-8     /* 24px mobile → 32px desktop */
```

### Max Width Container

```css
max-w-7xl   /* 80rem / 1280px — main content wrapper */
```

### Grid System

```html
<!-- Default = 1 col mobile, 2 col tablet, 3 col desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
```

- **Standard gap:** `gap-8` (32px)
- **Compact gap:** `gap-6` (24px)

### Border Radius

```css
rounded-xl   /* 12px — cards, buttons, inputs */
rounded-2xl  /* 16px — large cards */
rounded-3xl  /* 24px — section containers */
rounded-full /* 999px — pills, circles */
```

---

## 🎬 Animations & Interactions

### Keyframe Definitions

```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(40px); }
  to   { opacity: 1; transform: translateX(0); }
}

@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.92); }
  to   { opacity: 1; transform: scale(1); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-8px); }
}
```

### Animation Utility Classes

```css
/* Staggered fade-up (use d1–d4 for sequential reveals) */
.anim-fade-up    { animation: fadeInUp 0.7s ease-out 0.00s both; }
.anim-fade-up-d1 { animation: fadeInUp 0.7s ease-out 0.12s both; }
.anim-fade-up-d2 { animation: fadeInUp 0.7s ease-out 0.24s both; }
.anim-fade-up-d3 { animation: fadeInUp 0.7s ease-out 0.36s both; }
.anim-fade-up-d4 { animation: fadeInUp 0.7s ease-out 0.48s both; }

/* Directional enters */
.anim-fade-right { animation: fadeInRight 0.8s ease-out 0.3s both; }
.anim-fade-left  { animation: fadeInLeft  0.8s ease-out 0.3s both; }
.anim-scale      { animation: scaleIn     0.6s ease-out 0.2s both; }

/* Continuous float */
.float-anim { animation: float 4s ease-in-out infinite; }
```

### Hover & Transition Effects

```css
/* Card lift on hover */
.card-hover {
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 0.35s ease;
}
.card-hover:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 50px -12px rgba(163, 125, 106, 0.15);
}

/* Button lift on hover */
.btn-primary {
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px -5px rgba(113, 163, 131, 0.4);
}
```

---

## 🔘 Component Library

### Buttons

**Primary Button (Sage Green)**
```html
<a href="#" class="inline-flex items-center gap-1 px-8 py-4 bg-sage text-white font-semibold text-base rounded-full btn-primary shadow-lg shadow-black/15 hover:bg-sage-dark">
  <iconify-icon icon="fa6-brands:whatsapp" class="text-lg"></iconify-icon>
  הצטרפו לקהילה
</a>
```

**Secondary Button (Outline)**
```html
<a href="#" class="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-taupe font-medium text-base rounded-full border-2 border-sage hover:bg-sage/20 transition-all duration-300">
  גלו עוד
  <iconify-icon icon="lucide:arrow-left" class="text-base"></iconify-icon>
</a>
```

**Ghost Button (White on dark backgrounds)**
```html
<a href="#" class="inline-flex items-center gap-2 px-8 py-4 bg-white text-taupe font-medium text-base rounded-full hover:bg-warm-50 transition-all duration-300">
  לרכישת הספר
</a>
```

---

### Service Card

```html
<div class="card-hover bg-white rounded-2xl p-8 shadow-sm border border-warm-200/60 relative overflow-hidden group">
  <div class="absolute top-0 left-0 right-0 h-1.5 bg-sage"></div>
  <div class="w-14 h-14 bg-sage rounded-2xl flex items-center justify-center mb-6">
    <iconify-icon icon="lucide:message-circle-heart" class="text-2xl text-white"></iconify-icon>
  </div>
  <h3 class="text-xl font-bold text-warm-900 mb-3">Card Title</h3>
  <p class="text-warm-600/80 leading-relaxed text-sm">Description text here.</p>
</div>
```

---

### Badge / Section Label

**Accent background (on light sections)**
```html
<span class="inline-flex items-center gap-2 px-4 py-1.5 bg-taupe/10 text-taupe text-xs font-semibold rounded-full mb-4">
  <iconify-icon icon="lucide:heart" class="text-taupe"></iconify-icon>
  השירותים שלנו
</span>
```

**Light badge (on dark/hero sections)**
```html
<span class="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 text-warm-50 text-xs font-medium rounded-full backdrop-blur-sm border border-white/10">
  <iconify-icon icon="lucide:sparkles" class="text-white/80"></iconify-icon>
  קלינאית תקשורת התפתחותית
</span>
```

---

### Testimonial Card

```html
<div class="bg-white rounded-xl p-5 shadow-sm">
  <p class="text-sm text-warm-700 leading-relaxed">"Quote text here..."</p>
  <span class="text-xs font-semibold text-warm-900 mt-2 block">— Name</span>
  <span class="text-xs text-warm-500">Title / Role</span>
</div>
```

---

### Hero Pattern Background

```css
.hero-pattern {
  background-image:
    radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
}
```

---

## 🧩 Reusable Components (Petite Vue)

### StickyHeader

| Property | Value |
|----------|-------|
| **Component ID** | `08800e2f-fba8-4738-b83e-b899e14ec593` |
| **Purpose** | Navigation header with logo, menu, and CTA |

**Props:**

| Prop | Type | Description |
|------|------|-------------|
| `activePage` | string | Current page ID for active nav state |
| `homeHref` | string | URL for home page |
| `bookHref` | string | URL for book page |
| `consultationHref` | string | URL for consultation page |
| `coursesHref` | string | URL for courses page |
| `videoHref` | string | URL for video page |
| `blogHref` | string | URL for blog page |
| `whatsappHref` | string | WhatsApp community link |
| `navButtonFontSize` | string | `18px` |
| `navButtonHoverBg` | string | `#F3EDE5` |
| `navButtonActiveFontColor` | string | `#A37D6A` |

```html
<sd-component componentId="08800e2f-fba8-4738-b83e-b899e14ec593" name="StickyHeader"
  props='{"activePage":"home","homeHref":"...","bookHref":"..."}'>
</sd-component>
```

---

### Footer

| Property | Value |
|----------|-------|
| **Component ID** | `0892c232-281f-453c-b9f6-4df9b165af88` |
| **Purpose** | Footer with links, social media, and contact info |

```html
<sd-component componentId="0892c232-281f-453c-b9f6-4df9b165af88" name="Footer"
  props='{"homeHref":"...","bookHref":"..."}'>
</sd-component>
```

---

### NavMenu

| Property | Value |
|----------|-------|
| **Component ID** | `031b5f46-3036-447e-b94f-234bad40de80` |
| **Purpose** | 6-page desktop navigation menu |
| **Used in** | StickyHeader |

---

## 🖼️ Image Assets

| Asset | Filename | Usage | Aspect Ratio |
|-------|----------|-------|--------------|
| Hero image | `_YAK4032_edit_print.jpg` | Hero section (Noa with baby) | 4:5 portrait |
| Book cover | `כריכה.png` | Book product image | 3:4 vertical |
| About section | `marketing_photo_with_toys.jpg` | About section main image | 1:1 square |
| Profile headshot | `profile_photo3.jpg` | Circular profile photo | 1:1 square |
| Logo | `logo_new_1__Vectorized_.svg` | Header logo | Auto height |

**Implementation standard:**

```html
<img src="[URL]" alt="[descriptive alt text]"
     class="w-full h-full object-cover object-top"
     loading="lazy">
```

- All images use `loading="lazy"` for performance
- Cropping: `object-cover` / `object-top` for responsive scaling
- Border radius: `rounded-2xl` for cards, `rounded-full` for circular

---

## 📱 Responsive Breakpoints

```javascript
screens: {
  'sm':  '640px',   // Mobile landscape
  'md':  '768px',   // Tablet
  'lg':  '1024px',  // Desktop
  'xl':  '1280px',  // Large desktop
  '2xl': '1536px',  // Extra large
}
```

**Mobile-first pattern:**
```html
<!-- 1 col on mobile → 2 on tablet → 3 on desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
```

---

## 🌐 RTL Implementation

```html
<html lang="he" dir="rtl">
```

- All Tailwind `left`/`right` utilities flip automatically in RTL
- Flexbox and Grid handle RTL layout natively
- No custom CSS needed for text direction
- Use absolute positioning cautiously — test at both mobile and desktop

---

## ✅ New Page Checklist

- [ ] `dir="rtl"` on `<html>` tag
- [ ] Import StickyHeader with correct `activePage` value
- [ ] Section padding: `py-20 lg:py-28`
- [ ] Use color tokens only: `bg-warm-50`, `text-warm-900`, `border-warm-200/60`
- [ ] All buttons use `.btn-primary` class
- [ ] All cards use `.card-hover` class
- [ ] Staggered animation delays: `.anim-fade-up-d1`, `.anim-fade-up-d2`, etc.
- [ ] All grids collapse to 1 column on mobile
- [ ] Footer component included at bottom
- [ ] All images use `loading="lazy"`
- [ ] No hardcoded hex colors — Tailwind classes only
- [ ] RTL layout tested at desktop and mobile

---

## 🚀 Quick Class Reference

```css
/* Backgrounds */
bg-warm-50        /* Main page background */
bg-white          /* Card background */
bg-sage           /* CTA button fill */
bg-taupe          /* Hero section, accent areas */

/* Text */
text-warm-900     /* Primary body text */
text-warm-600/80  /* Secondary / muted text */

/* Shape */
rounded-2xl       /* Cards */
rounded-full      /* Pills, icon circles */
shadow-sm         /* Subtle card shadow */

/* Behavior */
card-hover        /* Card lift animation on hover */
btn-primary       /* Button lift + shadow on hover */
anim-fade-up      /* Page-load entrance animation */
float-anim        /* Continuous floating effect */
```

---

*Design System v1.0 | מתחילים לדבר | 2024*
