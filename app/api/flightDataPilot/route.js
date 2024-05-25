import { MongoClient, ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

const uri = process.env.MONGODB_URI; // Ensure you have this in your .env file
const client = new MongoClient(uri);

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const PilotID = searchParams.get('PilotID');
  const secret = process.env.NEXTAUTH_SECRET; // Ensure you have this in your .env file

  // Use getToken to retrieve the session
  const token = await getToken({ req: request, secret });

  console.log('Session:', token);

  if (!token) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const userRole = token.name ; // Assuming role is stored in the token

  let collectionName;
  if (userRole === 'Indigo') {
    collectionName = 'Indigo';
  } else if (userRole === 'AirIndia') {
    collectionName = 'AirIndia';
  } else {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    await client.connect();
    const database = client.db('AppDB');
    const collection = database.collection(collectionName);
    let flightData;
    if (PilotID) {
      flightDataPilot = await collection.findOne({ _id: new ObjectId(PilotID) });
    } else {
      flightDataPilot = await collection.find({}).toArray();
    }
    return NextResponse.json(flightDataPilot);
  } catch (error) {
    console.error('Error fetching flight data:', error);
    return new NextResponse('Unable to fetch flight data', { status: 500 });
  } finally {
    await client.close();
  }
}
