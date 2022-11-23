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
  tag: string
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Intro IntroTitle='MyBlog' IntroDesc='MyBlog é um projeto que criei usando Next.js e TypeScript, se trata de um blog de Tecnologia que vai me ajudar a memorizar conteúdo.Também usarei o MyBlog como um Hobby, escreverei posts sobre conteúdos que eu determinar interessantes de compartilhar.' />

      <Container>
        <FlexWrap>
          {posts.map((post: PostObj) => {
            return (
              <Post key={post._id} title={post.title} desc={post.desc} thumb={post.thumb} tag={post.tag} link={`/post/${post._id}`} />
            )
          })}
        </FlexWrap>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://my-blog-tech.vercel.app/api/listPosts")
  const result = await res.json()

  return {
    props: {
      posts: result.data,
    },
    revalidate: 500 // Seconds
  }
}