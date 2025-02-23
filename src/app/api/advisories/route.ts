import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const vercelUrl = 'https://faa-serverless-function.vercel.app/api/advisories';
    const response = await fetch(vercelUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Cloudflare-Next.js', // Help Vercel identify the caller
      },
    });

    const text = await response.text(); // Use text first to avoid JSON parse errors
    try {
      const data = JSON.parse(text);
      return NextResponse.json(data);
    } catch (parseError) {
      return NextResponse.json(
        { error: 'Failed to parse Vercel response', details: text },
        { status: 500 }
      );
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Fetch failed', details: errorMessage },
      { status: 500 }
    );
  }
}

export const runtime = 'edge';