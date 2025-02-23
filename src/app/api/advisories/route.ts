import { NextResponse } from 'next/server'
import clientPromise from '@/data/mongodb'

export const runtime = 'edge'

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("advisories_db")
    
    const advisories = await db
      .collection("starship_advisories")
      .find({})
      .sort({ advisorystarttimestr: -1 })
      .toArray()

    return NextResponse.json(advisories)
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Failed to fetch advisories' }, { status: 500 })
  }
}