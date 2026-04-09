import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';


function parseDate(dateStr: string) {
  const [m, d, y] = dateStr.split('/');
  return new Date(Number(y), Number(m) - 1, Number(d));
}

export async function GET(context: APIContext) {
  const entries = await getCollection('post');

  return rss({
    title: "Jiseeeh's Blog",
    description: 'Notes from someone still figuring it out — shipped anyway.',
    site: context.url.origin,
    items: entries.map((entry) => ({
      title: entry.data.title,
      pubDate: parseDate(entry.data.date),
      description: entry.data.frontmatter,
      link: `/posts/${entry.id}`,
    })),
    customData: `<language>en-us</language>`,
  });
}