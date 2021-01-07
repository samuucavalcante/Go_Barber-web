import React from 'react';

import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast Type="success" hasDescription>
        <FiAlertCircle size={20} />
        <div>
          <strong>Lorem ipsum dolor</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            dicta.
          </p>
        </div>
        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
