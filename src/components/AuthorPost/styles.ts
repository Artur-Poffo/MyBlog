import styled from "styled-components";

interface IPerfilImage {
  Image: string
}

export const Container = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 15px;

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: var(--text);

    a {
      display: inline-block;
      color: var(--primary);
      text-decoration: underline;
      cursor: pointer;
    }
  }

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
      align-items: center;
    }
  }
`

export const PerfilImage = styled.div<IPerfilImage>`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-image: url(${props => props.Image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`