import styled from "styled-components";

export const Nav = styled.nav`
  width: 100vw;
  height: 7vh;
  background-color: var(--background);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 520px) {
    display: none;
  }
`

export const Links = styled.ul`
  display: flex;
  gap: 20px;

  li {
    text-transform: capitalize;
    letter-spacing: 3px;
    color: var(--text);
    transition: all .3s ease;
    cursor: pointer;

    &:hover {
      color: var(--textLight);
    }
  }
`