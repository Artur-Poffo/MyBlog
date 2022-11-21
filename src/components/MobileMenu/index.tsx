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

      <ListMobile setShow={setShow} show={show} items={[{ name: "Home", to: "/" }, { name: "Posts", to: "/posts" }, { name: "Contato", to: "/contact" }]} />
    </>
  )
}

export default MobileMenu