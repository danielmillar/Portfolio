import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const vercelUrl = 'https://faa-serverless-function.vercel.app/api/advisories';
    const response = await fetch(vercelUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Vercel fetch failed with status ${response.status}: ${errorText}`);
      return NextResponse.json(
        { error: `Vercel fetch failed`, status: response.status, details: errorText },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    const errorMessage = (error instanceof Error) ? error.message : 'Unknown error';
    console.error('Error in API route:', errorMessage);
    return NextResponse.json(
      { error: 'Internal Server Error', details: errorMessage },
      { status: 500 }
    );
  }
}

export const runtime = 'edge';