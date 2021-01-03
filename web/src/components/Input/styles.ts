import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  background-color: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  color: #f4ede8;

  &::placeholder {
    color: #666360;
  }
  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
      .icon {
        display: block;
      }
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
      .icon {
        display: block;
      }
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
      .icon {
        display: block;
      }
    `}



  input {
    flex: 1;
    background-color: transparent;
    border: 0;
    color: #f4ede8;
  }
  svg {
    margin-right: 16px;
  }
`;
export const Error = styled(Tooltip)`
  height: 21px;
  margin: 0;

  span {
    color: #fff;
    background-color: #c53030;

    &::before {
      border-color: #c53030 transparent;
    }
  }

  svg {
    margin-right: 0;
  }
`;
