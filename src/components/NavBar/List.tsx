import Link from "next/link"
import { Links } from "./styles"

type link = {
  name: string
  to: string
}

interface Props {
  links: Array<link>
}

const List: React.FC<Props> = ({ links }) => {
  return (
    <>
      <Links>
        {links.map((link, index) => {
          return (
            <Link key={index} href={link.to} >
              <li>{link.name}</li>
            </Link>
          )
        })}
      </Links>
    </>
  )
}

export default List