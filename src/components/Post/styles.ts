import styled from 'styled-components';

interface Props {
  image: string
}

export const Container = styled.a`
  display: block;
  width: 320px;
  background-color: var(--background);
  border-radius: 10px;
  box-shadow: 0px 3px 10px black;
  cursor: pointer;
  transition: all .4s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Thumb = styled.div<Props>`
  width: 100%;
  height: 200px;
  background-image: url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Content = styled.div`
  padding: 40px 30px;

   h2, p {
    letter-spacing: .7px;
    color: var(--primary);
    text-align: left;
  }

  p {
    margin: 10px 0;
    color: var(--text);
  }
`