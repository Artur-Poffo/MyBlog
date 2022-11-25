import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  width: 100vw;
  height: 7vh;
  background-color: var(--background);
  box-shadow: 3px 3px 10px #000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  @media (max-width: 520px) {
    display: none;
  }
`

export const Links = styled.ul`
  display: flex;
  gap: 20px;
  font-weight: 500;

  a:first-child {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-right: 15px;
    text-transform: uppercase;
    font-weight: bolder;
    color: var(--primary);

    &:hover {
      color: var(--secondary);
    }

    ::after {
      content: "|";
    }
  }

  a {
    text-transform: capitalize;
    letter-spacing: .5px;
    color: var(--text);
    transition: all .3s ease;
    cursor: pointer;

    &:hover {
      color: var(--textLight);
    }
  }
`