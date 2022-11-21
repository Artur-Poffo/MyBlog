import { InferGetStaticPropsType } from 'next'
import { GetStaticProps } from "next"
import { Container } from "../styles/pages/Home"

import Title from "../components/Title"
import FlexWrap from "../components/FlexWrap"
import Post from "../components/Post"

interface PostObj {
  _id: string
  title: string
  desc: string
  thumb: string
}

export default function Home() {
  return (
    <>
      <h1>a</h1>
    </>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch("http://localhost:3000/api/trending")
//   const result = await res.json()

//   return {
//     props: {
//       posts: result.data,
//     },
//     revalidate: 3600 // One Hour
//   }
// }