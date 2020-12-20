import styled from 'styled-components';

import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
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
    h1 {
      margin-bottom: 24px;
    }
    input {
      background-color: #232129;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;
      width: 100%;
      color: #f4ede8;
      &::placeholder {
        color: #666360;
      }
      & + input {
        margin-top: 8px;
      }
    }
    button {
      background-color: #ff9000;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      width: 100%;
      height: 56px;
      color: #312e38;
      font-weight: 500;
      margin-top: 16px;
      transition: background-color 0.2;
      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
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
