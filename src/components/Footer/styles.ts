import styled from "styled-components";

export const Container = styled.footer`
  width: 100vw;
  height: 15vh;
  color: var(--text);
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    a {
      text-decoration: underline;
      transition: all .5s ease;

      &:hover {
        color: var(--textLight);
      }
    }
  }
`