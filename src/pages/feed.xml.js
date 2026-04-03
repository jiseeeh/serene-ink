import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const entries = await getCollection('post');

  return rss({
    title: "Jiseeeh's Blog",
    description: 'Notes from someone still figuring it out — shipped anyway.',
    site: context.url.origin,
    items: entries.map((entry) => ({
      title: entry.data.title,
      pubDate: new Date(entry.data.date),
      description: entry.data.frontmatter,
      link: `/posts/${entry.id}`,
    })),
    customData: `<language>en-us</language>`,
  });
}