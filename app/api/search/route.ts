import { NextRequest, NextResponse } from 'next/server';
import { searchArticles } from '@/lib/articles';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q') || '';

  if (!query.trim()) {
    return NextResponse.json({ results: [] });
  }

  const results = searchArticles(query).map((a) => ({
    title: a.title,
    excerpt: a.excerpt,
    category: a.category,
    slug: a.slug,
    image: a.image,
    date: a.date,
  }));

  return NextResponse.json({ results });
}
