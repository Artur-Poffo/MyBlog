import React from "react";
import { H1 } from "./styles"

interface Props {
  text: string
}

const Title: React.FC<Props> = ({ text }) => {
  return (
    <H1>{text}</H1>
  )
}

export default Title