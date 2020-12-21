import React, { useCallback } from 'react';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { Form } from '@unform/web';
import { Container, Background, Content } from './styles';

import logoImg from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

const SignIn: React.FC = () => {
  const handleSubimit = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <Form onSubmit={handleSubimit}>
          <h1>Faça seu Logon</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            type="password"
            icon={FiLock}
            placeholder="Password"
          />
          <Button type="submit">Entrar</Button>
          <a href="outra coisa">Esqueci minha senha</a>
        </Form>
        <a href="qualquer coisa">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
