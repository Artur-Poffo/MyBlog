import { Schema, model, models } from 'mongoose'

interface IPosts {
  title: string
  desc: string
  thumb: string
}

const PostSchema = new Schema<IPosts>({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  thumb: { type: String, required: true }
})

const Post = models.posts || model<IPosts>('posts', PostSchema)

export default Post