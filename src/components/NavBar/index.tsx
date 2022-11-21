import { Nav } from "./styles"
import List from "./List"

export default function NavBar() {
  return (
    <>
      <Nav>
        <List links={[{ name: "Home", to: "/" }, { name: "Posts", to: "/posts" }, { name: "Contato", to: "/contact" }]} />
      </Nav>
    </>
  )
}