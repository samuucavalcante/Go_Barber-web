import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;
const toAppearToRight = keyframes`
  to {
    opacity: 1;
    transform: translateX(0px);
  }
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 354px;
    text-align: center;
    animation: ${toAppearToRight} 1s;

    h1 {
      margin-bottom: 24px;
    }

    a {
      display: block;
      margin-top: 32px;
      color: #f4ede8;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
  > a {
    display: block;
    margin-top: 32px;
    color: #ff9000;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      margin-right: 16px;
    }
    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  background: url(${signInBackgroundImg}) no-repeat center;
  flex: 1;
  background-size: cover;
`;
