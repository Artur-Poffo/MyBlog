import styled from "styled-components";

interface IBg {
  image: string
}

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
`

export const Header = styled.div<IBg>`
  width: 100%;
  height: 70vh;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`

export const Content = styled.div`
  width: 100%;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    color: var(--secondary);
    letter-spacing: 3px;
    font-weight: bold;
    font-size: smaller;
    margin: 0 0 50px 0;
    display: flex;
    gap: 10px;
  }
`

export const PostText = styled.div`
  padding: 0 10px;
  max-width: 960px;

  p {
    color: var(--text);
    letter-spacing: .5px;
    line-height: 1.6;
    font-size: 1.25rem;
    margin-bottom: 30px;
  }
`