import { NextApiResponse, NextApiRequest } from 'next'

import ua from "../../../../database/locales/ua.json";
import de from "../../../../database/locales/de.json";
import en from "../../../../database/locales/en.json";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<any>
) {
  return res.status(200).json({data: ua })
}
