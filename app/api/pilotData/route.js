import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

const uri = process.env.MONGODB_URI; // Ensure you have this in your .env file
const client = new MongoClient(uri);

export async function GET(request) {
  const secret = process.env.NEXTAUTH_SECRET; // Ensure you have this in your .env file

  // Use getToken to retrieve the session
  const token = await getToken({ req: request, secret });

  console.log('Session:', token);

  if (!token) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const { pilotId, airline } = token;

  let collectionName;
  if (airline === 'Indigo') {
    collectionName = 'Indigo';
  } else if (airline === 'AirIndia') {
    collectionName = 'AirIndia';
  } else {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    await client.connect();
    const database = client.db('AppDB');
    const collection = database.collection(collectionName);
    const pilotData = await collection.find({ PilotID: pilotId }).toArray();
    return NextResponse.json(pilotData);
  } catch (error) {
    console.error('Error fetching flight data:', error);
    return new NextResponse('Unable to fetch flight data', { status: 500 });
  } finally {
    await client.close();
  }
}
