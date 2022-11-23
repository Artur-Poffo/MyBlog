import { Container, Thumb, Content } from "./styles"

interface Props {
  link: string
  thumb: string
  title: string
  desc: string
  tag: string
}

const Post: React.FC<Props> = ({ title, desc, thumb, link, tag }) => {
  return (
    <Container href={link}>
      <Thumb image={thumb} />
      <Content>
        <h2>{title}</h2>
        <p>{desc}</p>
        <span>{tag}</span>
      </Content>
    </Container>
  )
}

export default Post