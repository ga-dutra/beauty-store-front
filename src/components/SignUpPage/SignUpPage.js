import {
  CoverImage,
  FormWrapper,
  FormTitle,
  Form,
  InputWrapper,
  IconInput,
  Input,
  AlertMessage,
} from "../../styles/SignInWrapper.js";
import { MainButton } from "../../styles/MainButton.js";
import cover from "../../assets/img/cover-signup.svg";
import user from "../../assets/img/user.svg";
import email from "../../assets/img/email.svg";
import password from "../../assets/img/password.svg";
import { useState } from "react";
import { createUser } from "../../api/requests.js";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function submitForm(e) {
    e.preventDefault();
    const body = { ...form };
    console.log(body);
    createUser(body)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        alert(error.response.data);
      });
  }

  return (
    <>
      <CoverImage src={cover}></CoverImage>
      <FormWrapper page="signup">
        <FormTitle>Cadastrar</FormTitle>
        <Form onSubmit={submitForm}>
          <InputWrapper>
            <IconInput src={user} />
            <Input
              name="name"
              type="text"
              placeholder="Nome"
              value={form.name}
              onChange={handleForm}
            />
          </InputWrapper>
          <InputWrapper>
            <IconInput src={email} />
            <Input
              name="email"
              type="email"
              placeholder="E-mail"
              value={form.email}
              onChange={handleForm}
            />
          </InputWrapper>
          <InputWrapper>
            <IconInput src={password} />
            <Input
              name="password"
              type="password"
              placeholder="Senha"
              value={form.password}
              onChange={handleForm}
            />
          </InputWrapper>
          <InputWrapper>
            <IconInput src={password} />
            <Input
              name="passwordConfirmation"
              type="password"
              placeholder="Confirme a senha"
              value={form.passwordConfirmation}
              onChange={handleForm}
            />
          </InputWrapper>
          <AlertMessage>
            Crie uma senha de, no mínimo, 8 caracteres, com uma combinação de
            letras maiúsculas, minúsculas e caracteres especiais.
          </AlertMessage>
          <MainButton type="submit">Ir para o login</MainButton>
        </Form>
      </FormWrapper>
    </>
  );
}
