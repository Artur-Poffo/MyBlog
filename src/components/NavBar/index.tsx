import { Nav } from "./styles"
import List from "./List"

export default function NavBar() {
  return (
    <>
      <Nav>
        <List links={[{ name: "Blog", to: "/" }, { name: "Front-End", to: "/tag/Front-End" }, { name: "Back-End", to: "/tag/Back-End" }, { name: "Full-Stack", to: "/tag/Full-Stack" }, { name: "Mobile", to: "/tag/Mobile" },]} />
      </Nav>
    </>
  )
}