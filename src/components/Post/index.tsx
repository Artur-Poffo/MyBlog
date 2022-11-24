import { Container, Thumb, Content } from "./styles"

interface Props {
  link: string
  thumb: string
  title: string
  techs: Array<string>
  tag: string
}

const Post: React.FC<Props> = ({ title, techs, thumb, link, tag }) => {
  return (
    <Container href={link}>
      <Thumb image={thumb} />
      <Content>
        <ul>
          {techs.map(tech => (
            <li key={tech} >{tech}</li>
          ))}
        </ul>
        <h2>{title}</h2>
        <span>{tag}</span>
      </Content>
    </Container>
  )
}

export default Post