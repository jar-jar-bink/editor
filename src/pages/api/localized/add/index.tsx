import connectMongo from '../../../../../utils/connectMongo';
import Local from '../../../../../models/local';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addLocal(req, res) {
    console.log(req.body)
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log('CREATING DOCUMENT');
    const test = await Local.create(req.body);
    console.log('CREATED DOCUMENT');

    res.json({ test });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}