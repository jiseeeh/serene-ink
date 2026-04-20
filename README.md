# Serene Ink

Serene Ink is a minimalist, elegant, and blazing-fast Astro blog template designed for developers, writers, and creators. It features a clean UI, dark/light mode toggle, and MDX support out of the box, ensuring you can focus entirely on your writing.

## 🚀 Features

- **Astro & MDX:** Write content efficiently with full Markdown/MDX component support.
- **Tailwind CSS v4:** Modern styling with seamless customization.
- **Performance First:** 100/100 Lighthouse scores with minimal shipping JavaScript.
- **Centralized Config:** Personalize the entire site from a single `src/config.ts` file.
- **Dark/Light Mode:** Smooth theme toggle with a radial clip-path view transition animation.
- **Tags & Categories:** Browse posts by tag with dedicated `/tags` and `/tags/[tag]` pages.
- **Pagination:** Configurable posts-per-page with numbered pagination controls.
- **Search:** Cmd+K search modal with instant client-side filtering.
- **RSS Feed:** Built-in RSS feed generation out of the box.
- **SEO Optimized:** Open Graph, Twitter Cards, canonical URLs, JSON-LD structured data, sitemap, and robots.txt.
- **Draft Posts:** Mark posts as `draft: true` to hide them from listings, search, and RSS during development.
- **Last Updated Date:** Optional `updatedDate` frontmatter field displayed alongside the publish date.
- **Share Buttons:** Copy link, Twitter/X, and LinkedIn share buttons on every post.
- **Prev/Next Navigation:** Navigate between adjacent posts at the bottom of each article.
- **Related Posts:** Automatically suggests up to 3 related posts based on shared tags.
- **Table of Contents:** Desktop sidebar and mobile FAB with active heading highlighting.
- **Reading Progress:** Scroll progress bar on post pages and proportional read-time indicators on the listing.
- **Scroll-Aware Navbar:** Sticky nav that auto-hides on scroll down and adds blur on scroll.
- **Back to Top:** Fixed button that appears after scrolling, smooth scrolls to top.
- **Page Transitions:** Subtle fade + slide animations between page navigations.
- **Footer:** Site-wide footer with social links, copyright, and built-with credit.
- **Analytics:** Configurable Umami analytics — just add your website ID and script URL.
- **Responsive & Accessible:** Beautifully crafted for both mobile and desktop experiences.
- **Custom Cursor:** Smooth LERP cursor on pointer-fine devices.
- **Expressive Code:** Syntax highlighting with copy-to-clipboard, line highlighting, and file titles.
- **MDX Components:** Callout, Tabs, Steps, ProsCons, Quote, YouTube, Figure, LinkCard, and more.

## 🧞 Setting Up

1. **Clone the repository** (or use the template):
   ```sh
   git clone https://github.com/your-username/serene-ink.git my-blog
   cd my-blog
   ```

2. **Install dependencies**:
   ```sh
   pnpm install
   ```

3. **Start the local development server**:
   ```sh
   pnpm dev
   ```
   Open `localhost:4321` in your browser.

## ✍️ Personalization

### Quick Start — `src/config.ts`

This is the **primary configuration file**. Open it and update these values to make the template yours:

```ts
export const siteConfig = {
  title: "Your Blog Name",
  description: "Your blog description.",
  siteUrl: "https://your-domain.com",
  author: {
    name: "Your Name",
    bio: "A short bio about yourself.",
  },
  nav: [
    { label: "Writing", href: "/" },
    { label: "About", href: "/about" },
  ],
  socials: {
    github: "https://github.com/your-username",
    twitter: "",     // leave empty to hide
    linkedin: "",    // leave empty to hide
  },
  postsPerPage: 5,
  analytics: {
    umami: {
      websiteId: "", // e.g., "a1b2c3d4-..."
      src: "",       // e.g., "https://cloud.umami.is/script.js"
    },
  },
  rss: {
    title: "Your Blog",
    description: "Your RSS feed description.",
  },
};
```

### Additional Personalization

1. **Domain config:** Open `astro.config.mjs` and update `site` to match your production URL.
2. **Author Profile & Projects:** Open `src/components/Author.astro` to customize the About page — timeline, projects, activity cards, and introductory text.
3. **Favicon:** Replace `/public/favicon.svg` and `/public/favicon.ico` with your brand's icon.

## 📝 Adding New Blogs

All content lives in the `src/posts/` folder.
To create a new blog post, use the built-in command:

```sh
pnpm run new-post "Your Awesome Catchy Title"
```

Alternatively, create a new `.mdx` file and include the following frontmatter:

```mdx
---
title: "Your Awesome Catchy Title"
date: "03/12/2024"
frontmatter: "A short description or summary of your post."
tags: ["astro", "learning", "random"]
draft: false
image: ""
---

Your content goes here...
```

### Frontmatter Fields

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | string | ✅ | The post title |
| `date` | string | ✅ | Publish date in `MM/DD/YYYY` format |
| `frontmatter` | string | ✅ | Short summary (used on listing, RSS, and search) |
| `tags` | string[] | ✅ | Array of tags for categorization |
| `draft` | boolean | ❌ | Set to `true` to hide from all listings (default: `false`) |
| `updatedDate` | string | ❌ | Last updated date in `MM/DD/YYYY` format |
| `image` | string | ❌ | Path to a cover image (relative to `src/assets/`) |

### Organizing Posts

You can organize your posts into subdirectories inside `src/posts/` (e.g., `src/posts/2024/tutorials/my-post.mdx`). Astro will automatically generate the corresponding URL structure (`/posts/2024/tutorials/my-post`).

When nesting posts, use the `@/` alias to comfortably import out-of-the-box components without worrying about relative path depths:

```mdx
import Callout from '@/components/ui/Callout.astro';
```

*(Note that the `image` frontmatter property still requires relative paths like `../../../assets/images/cover.webp` when deeply nested.)*

## 📊 Analytics

Serene Ink supports [Umami](https://umami.is/) analytics out of the box. To enable it:

1. Create a free account at [umami.is](https://umami.is/) (or self-host).
2. Add your website and get your **Website ID** and **Script URL**.
3. Update `src/config.ts`:
   ```ts
   analytics: {
     umami: {
       websiteId: "your-website-id",
       src: "https://cloud.umami.is/script.js",
     },
   },
   ```

When both fields are empty, no analytics script is injected.

## 🌐 Deployment

This template is configured as a static site, compatible with hosts like **Cloudflare Pages**, **Vercel**, and **Netlify**.

**Deploying to Cloudflare Pages:**
1. Push your code to a GitHub or GitLab repository.
2. Log in to your Cloudflare dashboard → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Select your repository and configure:
   - **Framework preset:** Astro
   - **Build command:** `pnpm run build`
   - **Build output directory:** `dist`
4. Click **Save and Deploy**.

*(Don't forget to update your `site` URL in `astro.config.mjs` once deployed!)*

## 📜 License

This project is open-source and released under the [MIT License](LICENSE). Feel free to use it for personal or commercial projects.
