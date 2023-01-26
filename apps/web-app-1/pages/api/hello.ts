import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
  test: string;
};

function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: 'Example', test: process.env.TEST });
}

export default handler;
