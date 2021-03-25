import React, { useCallback, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Form } from '@unform/web';
import { FormHandles } from "@unform/core";
import * as Yup from 'yup';

import { FiUser, FiLock } from 'react-icons/fi';
import logo from '../../assets/logo.svg';

import { useToast } from "../../shared/hooks/toast";
import { useAuth } from '../../shared/hooks/auth';

import { Background, Container, Content } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import getValidationErrors from "../../utils/getValidarionErrors";

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const { login } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(async (data) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        login: Yup.string().required('Usuário obrigatório'),
        password: Yup.string()
          .required('Senha obrigatória')
      });

      await schema.validate(data, {
        abortEarly: false
      });

      await login({
        login: data.login,
        password: data.password
      });

      history.push('/admin');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors({ ...errors });
      }

      addToast({
        title: 'Erro na autenticação',
        description: 'Ocorreu um erro ao fazer login, tente novamente.',
        type: 'error'
      });
    }
  }, [login, addToast, history]);

  return (
    <Container>
      <Content>
        <img src={logo} alt="Aura Estética Corporal" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>

          <Input icon={FiUser} type="text" name="login" placeholder="Usuário" />
          <Input icon={FiLock} type="password" name="password" placeholder="Senha" />

          <Button type="submit" >Entrar</Button>
        </Form>
      </Content>

      <Background />
    </Container>
  );
}

export default Login;