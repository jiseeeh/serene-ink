# Serene Ink

Serene Ink is a minimalist, elegant, and blazing-fast Astro blog template designed for developers, writers, and creators. It features a clean UI, dark/light mode toggle, and MDX support out of the box, ensuring you can focus entirely on your writing.

## 🚀 Features

- **Astro & MDX:** Write content efficiently with full Markdown/MDX component support.
- **Tailwind CSS v4:** Modern styling with seamless customization.
- **Performance First:** 100/100 Lighthouse scores with minimal shipping JavaScript.
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

1. **Domain config:** Open `astro.config.mjs` and update `site` to match your intended production URL. This is crucial for fixing Sitemaps, SEO, and ensuring absolute URLs for social sharing graphic cards (Open Graph/Twitter/Discord) work correctly when deployed.
2. **Site Properties:** Go to `src/layouts/Layout.astro` and locate the `Astro.props` destructuring assignment (below the `Props` interface) to update your default site `title` and `description` for meta tags.
   - *Note on Meta Images:* Make sure your `home.webp` or custom social sharing images remain in the `public/` folder so social platforms evaluate their paths successfully.
   - You should also update the `title` and `description` in `src/pages/feed.xml.ts` for your RSS feed.
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

This template is configured natively as a static site, making it seamlessly compatible with static hosting services like **Cloudflare Pages**.

**Deploying to Cloudflare Pages:**
1. Push your template code to a GitHub or GitLab repository.
2. Log in to your Cloudflare dashboard and navigate to **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
3. Select your repository and proceed to setup.
4. Configure the build settings:
   - **Framework preset:** Astro
   - **Build command:** `pnpm run build`
   - **Build output directory:** `dist`
5. Click **Save and Deploy**.

*(Don't forget to update your `site` URL in `astro.config.mjs` once Cloudflare provides you with your `[project-name].pages.dev` link!)*

## 📜 License

This project is open-source and released under the [MIT License](LICENSE). Feel free to use it for personal or commercial projects.
