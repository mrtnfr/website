---
name: save-point
description: Save progress by pushing to GitHub and updating project memory. Use this skill whenever the user types "save point", "/save-point", or asks to save their progress, checkpoint, or sync to GitHub with a memory update.
---

# Save Point

When the user invokes this skill, do the following two things in order:

## Step 1: Push to GitHub

1. Get the current branch name:
   ```bash
   git branch --show-current
   ```
2. Push it:
   ```bash
   git push origin <current-branch>
   ```
3. Report success or any error to the user.

## Step 2: Update project memory

Review the current conversation — everything that was discussed, built, changed, or decided — and update the memory files at:
`C:\Users\The Friedmanns\.claude\projects\C--Users-The-Friedmanns-Documents-website\memory\`

### Memory file types

- **project** (`project_*.md`) — ongoing work, goals, decisions, bugs, placeholders still needed
- **feedback** (`feedback_*.md`) — how the user wants you to work: corrections, confirmed approaches, preferences
- **user** (`user_*.md`) — who the user is, their role, knowledge level, preferences
- **reference** (`reference_*.md`) — pointers to external resources (links, IDs, external systems)

### What to update

For each memory type:
1. Check if a relevant file already exists — if so, **update it** rather than creating a duplicate.
2. Add anything new learned this session that would be useful in a future conversation.
3. Remove or correct anything that is now stale or wrong.

Focus on:
- New placeholders filled in (WhatsApp numbers, YouTube IDs, links)
- Sections of the page added, changed, or removed
- Design decisions made (colors, layout, copy)
- Things the user corrected you on
- New key element IDs or component names
- Any git/branch changes

### Memory file format

```markdown
---
name: <descriptive name>
description: <one-line description — used to decide relevance in future conversations>
type: <project | feedback | user | reference>
---

<content>
For feedback/project types, structure as: rule/fact, then **Why:** and **How to apply:** lines.
```

### MEMORY.md index

After writing/updating memory files, update `MEMORY.md` (the index file in the same directory). It should contain only brief pointers to each memory file — no content directly in the index. Keep it under 200 lines.

### What NOT to save

- Code patterns or file structure (derivable from reading the code)
- Git history (use `git log`)
- Debugging steps already reflected in the code
- Ephemeral task details from this conversation only

## Finish

Tell the user:
- ✅ Pushed to GitHub (branch name + any relevant info)
- ✅ Memory updated (briefly list what changed)
