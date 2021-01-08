import React from 'react';

import { useTransition } from 'react-spring';

import { ToastMessagesProps } from '../../hooks/toast';

import { Container } from './styles';

import Toast from './Toast';

interface ToastContainerProsps {
  messages: ToastMessagesProps[];
}

const ToastContainer: React.FC<ToastContainerProsps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <Container>
      {messagesWithTransitions.map(({ key, item, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;
