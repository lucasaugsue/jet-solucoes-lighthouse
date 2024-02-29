import { NextApiRequest, NextApiResponse } from "next";
import { sampleCarData } from "../../../utils/sample-data";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleCarData)) {
      throw new Error("Cannot find car data");
    }

    res.status(200).json(sampleCarData);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
