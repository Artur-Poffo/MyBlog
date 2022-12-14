import { GetStaticPaths, GetStaticProps } from "next"
import { InferGetStaticPropsType } from 'next'
import { ParsedUrlQuery } from 'querystring'

import { Container } from "../../styles/pages/Tag"

import Intro from "../../components/Intro"
import FlexWrap from "../../components/FlexWrap"
import Post from "../../components/Post"

interface PostObj {
  _id: string
  title: string
  thumb: string
  backdrop_path: string
  post_content: string
  techs: Array<string>
  tag: string
}

const TagPage: React.FC = ({ posts, tag }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Intro IntroTitle={tag} />

      <Container>
        <FlexWrap>
          {posts.map((post: PostObj) => {
            return (
              <Post key={post._id} title={post.title} techs={post.techs} thumb={post.thumb} tag={post.tag} link={`/post/${post._id}`} />
            )
          })}
        </FlexWrap>
      </Container>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { nameTag: "Front-End" } },
      { params: { nameTag: "Back-End" } },
      { params: { nameTag: "Full-Stack" } },
      { params: { nameTag: "Mobile" } },
    ],
    fallback: false
  }
}

interface IParams extends ParsedUrlQuery {
  PropsTag: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { nameTag } = context.params as IParams
  const req = await fetch(`https://my-blog-tech.vercel.app/api/tag/${nameTag}`)
  const data = await req.json()

  return {
    props: {
      posts: data.data,
      tag: nameTag
    },
    revalidate: 500 // Seconds
  }
}

export default TagPage