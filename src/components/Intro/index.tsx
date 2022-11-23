import { Container } from "./styles"

interface Props {
  IntroTitle: string
  IntroDesc?: string
}

const Intro: React.FC<Props> = ({ IntroTitle, IntroDesc }) => {
  return (
    <Container>
      <h1>{IntroTitle}</h1>
      <p>
        {IntroDesc}
      </p>
    </Container>
  )
}

export default Intro