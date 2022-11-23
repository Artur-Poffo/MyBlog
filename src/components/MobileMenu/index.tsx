import { Btn } from "./styles"
import ListMobile from "./ListMobile"
import { useState } from "react"

const MobileMenu: React.FC = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <Btn onClick={() => setShow(!show)} >
        <div />
        <div />
        <div />
      </Btn>

      <ListMobile setShow={setShow} show={show} links={[{ name: "Blog", to: "/" }, { name: "Front-End", to: "/tag/Front-End" }, { name: "Back-End", to: "/tag/Back-End" }, { name: "Full-Stack", to: "/tag/Full-Stack" }, { name: "Mobile", to: "/tag/Mobile" },]} />
    </>
  )
}

export default MobileMenu