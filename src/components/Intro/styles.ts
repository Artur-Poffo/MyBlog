import styled from "styled-components";

export const Container = styled.div`
  padding: 0 20px;
  width: 100vw;
  height: 47vh;
  background-color: var(--contrast);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  text-align: center;
  margin-bottom: 30px;

  h1 {
    font-size: 3.25rem;
    letter-spacing: .8px;
    color: var(--primary);
  }

  p {
    font-size: 1.125rem;
    font-weight: 500;
    letter-spacing: .7px;
    color: var(--textLight);
    max-width: 500px;
  }

  @media (max-width: 520px) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`