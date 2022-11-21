import styled from "styled-components";

interface IList {
  show: boolean
}

export const Btn = styled.div`
  width: 43px;
  height: 43px;
  border-radius: 50%;
  background-color: var(--background);
  box-shadow: 0px 3px 10px black;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  position: fixed;
  top: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 999;

  @media (max-width: 520px) {
    display: flex;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: #ffff;
  }
`

export const ListContainer = styled.div<IList>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  top: ${props => props.show ? "0" : "-100vh"};
  background-color: var(--background);
  display: none;
  align-items: center;
  justify-content: center;
  transition: all .5s ease;

  @media (max-width: 520px) {
    display: flex;
  }
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;

  a {
    opacity: .7;
    letter-spacing: 3px;
    text-transform: capitalize;
    cursor: pointer;
    transition: all .5s ease;

    &:hover {
      opacity: 1;
    }
  }
`