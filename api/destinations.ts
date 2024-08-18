import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/app/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check the API secret key
  const apiKey = req.headers['x-api-secret-key'];
  if (apiKey !== process.env.NEXT_PUBLIC_API_SECRET_KEY) {
    return res.status(403).json({ error: 'Forbidden: Invalid API key' });
  }

  try {
    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db('jason499');
    const collection = db.collection('traveldestinations');

    // Fetch data from the collection
    const destinations = await collection.find({}).toArray();

    // Send the data back as a JSON response
    res.status(200).json(destinations);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch data' });
  }
}