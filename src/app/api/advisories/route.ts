import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const vercelUrl = 'https://faa-serverless-function.vercel.app/api/advisories';
    console.log('Fetching from Vercel:', vercelUrl); // Diagnostic
    const response = await fetch(vercelUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Vercel response status:', response.status); // Diagnostic
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Vercel fetch failed with status ${response.status}: ${errorText}`);
      return NextResponse.json(
        { error: `Vercel fetch failed`, status: response.status, details: errorText },
        { status: response.status }
      );
    }

    const data: any = await response.json();
    console.log('Vercel response data received:', data.length); // Diagnostic
    return NextResponse.json(data);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error in API route:', errorMessage, (error as Error).stack); // Full stack for clarity
    return NextResponse.json(
      { error: 'Internal Server Error', details: errorMessage },
      { status: 500 }
    );
  }
}

export const runtime = 'edge';