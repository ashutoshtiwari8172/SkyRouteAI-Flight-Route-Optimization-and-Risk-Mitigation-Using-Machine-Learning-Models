import { MongoClient, ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

const uri = process.env.MONGODB_URI; // Ensure you have this in your .env file
const client = new MongoClient(uri);

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  try {
    await client.connect();
    const database = client.db('AppDB');
    const collection = database.collection('Flight');
    let flightData;
    if (id) {
      flightData = await collection.findOne({ _id: new ObjectId(id) });
    } else {
      flightData = await collection.find({}).toArray();
    }
    return NextResponse.json(flightData);
  } catch (error) {
    console.error(error);
    return NextResponse.error(new Error('Unable to fetch flight data'));
  } finally {
    await client.close();
  }
}
