import { NextResponse } from 'next/server';

export async function GET() {
  const response = await fetch('https://faa-serverless-function.vercel.app/api/advisories');
  const data = await response.json();
  return NextResponse.json(data);
}

export const runtime = 'edge';