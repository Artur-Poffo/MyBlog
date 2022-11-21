import styled from "styled-components";

export const Nav = styled.nav`
  width: 100vw;
  height: 7vh;
  background-color: var(--background);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Links = styled.ul`
  display: flex;
  gap: 20px;

  li {
    opacity: .7;
    text-transform: capitalize;
    letter-spacing: 3px;
    color: var(--text);
    transition: all .3s ease;
    cursor: pointer;

    &:hover {
      opacity: 1;
      color: var(--textLight);
    }
  }
`