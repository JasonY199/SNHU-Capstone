import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/app/lib/mongodb';
import apiKeyMiddleware from '@/app/lib/middleware';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("API route hit");
  try {
    const client = await clientPromise;
    const db = client.db('jason499');
    const collection = db.collection('traveldestinations');

    const destinations = await collection.find({}).toArray();

    res.status(200).json(destinations);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: 'Unable to fetch data' });
  }
};

export default apiKeyMiddleware(handler);
