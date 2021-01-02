import styled from 'styled-components';
import bgImage from '../../assets/background.svg';

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0d0d0d;
  background: url(${bgImage});
  background-attachment: fixed;
  background-size: cover;
`

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`