# Serene Ink

Serene Ink is a minimalist, elegant, and blazing-fast Astro blog template designed for developers, writers, and creators. It features a clean UI, dark/light mode toggle, and MDX support out of the box, ensuring you can focus entirely on your writing.

## 🚀 Features

- **Astro & MDX:** Write content efficiently with full Markdown/MDX component support.
- **Tailwind CSS v4:** Modern styling with seamless customization.
- **RSS Feed:** Built-in RSS feed generation out of the box.
- **Responsive & Accessible:** Beautifully crafted for both mobile and desktop experiences.

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

To make this template your own, you'll need to update a few files:

1. **Domain config:** Open `astro.config.mjs` and update `site` to match your intended production URL (this controls your sitemaps and SEO).
2. **Site Properties:** Go to `src/layouts/Layout.astro` and locate the `Astro.props` destructuring assignment (below the `Props` interface) to update your default site `title` and `description` for meta tags. You should also update the `title` and `description` in `src/pages/feed.xml.js` for your RSS feed.
3. **Author Profile & Projects:** Open `src/components/Author.astro` to:
   - Change the `timeline` steps
   - Add your own `projects`
   - Update the "Currently Playing/Watching/Reading/Listening" in the `ActivityCard` sections
   - Rewrite the hero introductory texts describing yourself
4. **Structured Data:** Open `src/pages/posts/[slug].astro` and update the author's name in the `<script type="application/ld+json">` block to your own name for better SEO.
5. **Favicon:** Replace `/public/favicon.svg` and `/public/favicon.ico` with your brand's icon.

## 📝 Adding New Blogs

All content lives in the `src/posts/` folder.
To create a new blog post, you can use the built-in command:

```sh
pnpm run new-post "Your Awesome Catchy Title"
```

Alternatively, simply create a new `.mdx` file (e.g., `my-new-post.mdx`) and ensure you include the following frontmatter at the top of the file:

```mdx
---
title: "Your Awesome Catchy Title"
date: "03/12/2024"
frontmatter: "A short description or summary of your post."
tags: ["astro", "learning", "random"]
image: ""
---

Your content goes here...
```

## 🌐 Deployment

- TODO

## 📜 License

This project is open-source and released under the [MIT License](LICENSE). Feel free to use it for personal or commercial projects.
