import { InferGetStaticPropsType } from 'next'
import { GetStaticProps } from "next"
import { Container } from "../styles/pages/Home"

import Intro from '../components/Intro'
import FlexWrap from "../components/FlexWrap"
import Post from "../components/Post"

interface PostObj {
  _id: string
  title: string
  desc: string
  thumb: string
  backdrop_path: string
  post_content: string
  techs?: Array<string>
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Intro />

      <Container>
        <FlexWrap>
          {posts.map((post: PostObj) => {
            return (
              <Post key={post._id} title={post.title} desc={post.desc} thumb={post.thumb} link={`/post/${post._id}`} />
            )
          })}
        </FlexWrap>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://my-blog-tech.vercel.app/api/posts")
  const result = await res.json()

  return {
    props: {
      posts: result.data,
    },
    revalidate: 3600 // One Hour
  }
}