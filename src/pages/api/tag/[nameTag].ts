import type { NextApiRequest, NextApiResponse } from 'next'
import loadDB from "../../../utils/db"
import Post from "../../../utils/models/PostModel"

type Data = {
  success: boolean,
  data: object
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await loadDB()
  const postTAG = await Post.find({ tag: req.query.nameTag })

  res.status(200).json({ success: true, data: postTAG })
}
