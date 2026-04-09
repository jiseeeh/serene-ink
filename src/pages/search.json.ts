import { getCollection } from 'astro:content';

export async function GET() {
  const entries = await getCollection('post');

  const searchIndex = entries.map((entry) => ({
    title: entry.data.title,
    date: entry.data.date, 
    frontmatter: entry.data.frontmatter,
    tags: entry.data.tags,
    link: `/posts/${entry.id}`,
  }));

  return new Response(JSON.stringify(searchIndex), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
