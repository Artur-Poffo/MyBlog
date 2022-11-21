import React from "react"
import { Container } from "./styles"

interface Props {
  children: React.ReactChild[];
}

const FlexWrap: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default FlexWrap