import { ParsedUrlQuery } from 'querystring'
import { InferGetStaticPropsType } from 'next'
import { GetStaticPaths, GetStaticProps } from "next"
import Title from "../../components/Title"
import { Container, Header, Content, PostText } from "../../styles/pages/Post"

const Post: React.FC = ({ content }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <Header image={content.backdrop_path} />

      <Content>
        <Title text={content.title} />
        <ul>
          {content.techs.map((tech: string) => {
            return (
              <li key={tech} >{tech}</li>
            )
          })}
        </ul>

        <PostText>
          <p>
            {content.post_content}
          </p>
        </PostText>
      </Content>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking"
  }
}

interface IParams extends ParsedUrlQuery {
  PropsID: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { PostID } = context.params as IParams
  const res = await fetch(`https://my-blog-tech.vercel.app/api/post/${PostID}`)
  const data = await res.json()

  return {
    props: {
      content: data.data
    },
    revalidate: 3600 // One Hour
  }
}

export default Post