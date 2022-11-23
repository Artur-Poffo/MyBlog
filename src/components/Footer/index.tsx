import { Container } from "./styles"

const Footer: React.FC = () => {
  return (
    <Container>
      <ul>
        <a href="https://blog.rocketseat.com.br/">
          <li>Design inspirado no Blog da Rocketseat</li>
        </a>
        <a href="https://github.com/Artur-Poffo/My-Blog">
          <li>Repositório do Projeto no GitHub</li>
        </a>
      </ul>
    </Container>
  )
}

export default Footer