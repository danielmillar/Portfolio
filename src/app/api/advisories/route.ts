import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const vercelUrl = 'https://faa-serverless-function.vercel.app/api/advisories';
    console.log('Attempting fetch to:', vercelUrl);

    const response = await fetch(vercelUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Cloudflare-Next.js',
      },
    });

    const status = response.status;
    const headers = Object.fromEntries(response.headers.entries());
    console.log('Fetch status:', status, 'Headers:', headers);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Fetch failed: ${status} - ${errorText}`);
      return NextResponse.json(
        { error: 'Vercel fetch failed', status, details: errorText },
        { status }
      );
    }

    const data: any = await response.json();
    console.log('Data received:', data.length);
    return NextResponse.json(data);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error in API route:', errorMessage, (error as Error).stack);
    return NextResponse.json(
      { error: 'Internal Server Error', details: errorMessage },
      { status: 500 }
    );
  }
}

export const runtime = 'edge';