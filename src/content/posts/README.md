# Blog posts

Add new articles as `.md` files in this folder. The filename (without `.md`) becomes the URL slug at `/blog/<slug>`.

## Frontmatter template

```md
---
title: "Your post title"
description: "Short summary shown on the blog index and used as the default meta description."
category: "Global Sourcing" # one of: Global Sourcing, Supplier Verification, Commodity Export, Trade Documentation, Importation, OEM / ODM Manufacturing, Private Label Development
author: "Aisha Usman"
date: "2026-06-18"
image: "/blog/featured/your-image.jpg" # optional, place the file in /public/blog/featured/
seoTitle: "Optional override for <title>"
metaDescription: "Optional override for <meta name=description>"
related:
  - other-post-slug
  - another-post-slug
---

Your markdown content here. Standard markdown is supported.
```

Commit the file to GitHub. Vercel will rebuild and the post appears at `/blog/<filename>`.
