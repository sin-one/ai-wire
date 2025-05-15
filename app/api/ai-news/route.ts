import { NextResponse } from 'next/server';

export async function GET() {
  const API_KEY = '1AXp4gLH3VaN4';
  const API_URL = 'https://api.newswhip.com/v1/search';

  const now = new Date();
  const start = new Date(now.getTime() - 24 * 60 * 60 * 1000).toISOString();
  const end = now.toISOString();

  const queryParams = new URLSearchParams({
    key: API_KEY,
    q: 'AI',
    start,
    end,
    limit: '100',
    sort: 'facebook',
  });

  try {
    const response = await fetch(`${API_URL}?${queryParams.toString()}`);
    const data = await response.json();

    const englishArticles = (data.articles || []).filter(
      (article: Record<string, any>) => article.source?.language === 'en'
    );

    const sortedArticles = englishArticles.sort((a: any, b: any) => {
      const aScore = a.fb_data?.total_engagement_count || 0;
      const bScore = b.fb_data?.total_engagement_count || 0;
      return bScore - aScore;
    });

    return NextResponse.json({ articles: sortedArticles });
  } catch (error) {
    console.error('Server-side fetch error:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
