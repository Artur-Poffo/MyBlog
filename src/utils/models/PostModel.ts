import { Schema, model, models } from 'mongoose'

interface IPosts {
  _id: string
  title: string
  thumb: string
  backdrop_path: string
  post_content: string
  techs?: Array<string>
  tag: string
}

const PostSchema = new Schema<IPosts>({
  title: { type: String, required: true },
  thumb: { type: String, required: true },
  backdrop_path: { type: String, required: true },
  post_content: { type: String, required: true },
  techs: { type: Array, required: false },
  tag: { type: String, required: true }
})

const Post = models.posts || model<IPosts>('posts', PostSchema)

export default Post