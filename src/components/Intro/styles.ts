import styled from "styled-components";

export const Container = styled.div`
  padding: 0 20px;
  width: 100vw;
  height: 40vh;
  background-color: #3333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  text-align: center;
  margin-bottom: 30px;

  h2 {
    font-size: 2rem;
    letter-spacing: 3px;
    color: var(--primary);
  }

  p {
    font-size: 1.125rem;
    font-weight: bold;
    letter-spacing: .7px;
    color: var(--textLight);
    max-width: 500px;
  }

  @media (max-width: 520px) {
    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`