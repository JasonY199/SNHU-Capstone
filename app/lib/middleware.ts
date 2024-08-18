import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';

const apiKey = process.env.NEXT_PUBLIC_API_SECRET_KEY;

const apiKeyMiddleware = (handler: NextApiHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const requestApiKey = req.headers['x-api-secret-key'];

    if (requestApiKey !== apiKey) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    return handler(req, res);
  };
};

export default apiKeyMiddleware;
