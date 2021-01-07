import React from 'react';

import { ToastMessagesProps, useToast } from '../../hooks/toast';

import { Container } from './styles';

import Toast from './Toast';

interface ToastContainerProsps {
  messages: ToastMessagesProps[];
}

const ToastContainer: React.FC<ToastContainerProsps> = ({ messages }) => {
  return (
    <Container>
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;
