import { GetStaticProps } from "next"

import { Container, PerfilImage } from "./styles"

const AuthorPost: React.FC = () => {
  return (
    <Container>
      <PerfilImage Image={"https://avatars.githubusercontent.com/u/89012723?v=4"} />
      <div>
        <h2>Artur Poffo</h2>
        <span>Estudante de Desenvolvimento Web</span>
        <a href="https://github.com/Artur-Poffo">GitHub</a>
      </div>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}

export default AuthorPost