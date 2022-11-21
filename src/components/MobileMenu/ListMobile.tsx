import { ListContainer, List } from "./styles"
import Link from "next/link"

type link = {
  name: string
  to: string
}

interface Props {
  setShow: Function
  show: boolean
  items: Array<link>
}

const ListMobile: React.FC<Props> = ({ show, items, setShow }) => {
  return (
    <ListContainer show={show} >
      <List>
        {items.map((item, index) => {
          return (
            <Link onClick={() => setShow(false)} key={index} href={item.to} >
              {item.name}
            </Link>
          )
        })}
      </List>
    </ListContainer>
  )
}

export default ListMobile