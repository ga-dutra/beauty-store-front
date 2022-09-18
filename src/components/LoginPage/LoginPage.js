import { CoverImage, FormWrapper, FormTitle, Form, InputWrapper, IconInput, Input } from '../../styles/SignInWrapper.js';
import { MainButton } from '../../styles/MainButton.js';
import cover from '../../assets/img/cover-login.svg';
import email from '../../assets/img/email.svg';
import password from '../../assets/img/password.svg';
import { useContext, useState } from 'react';
import { postLogin } from '../../api/requests.js';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext.js';

export default function LoginPage () {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    const { setToken } = useContext(UserContext);

    function handleForm (e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    function submitForm (e) {
        e.preventDefault();
        const body = {...form};

        postLogin(body).then((res) => {
            setToken(`Bearer ${res.data}`);
            navigate('/');
        }).catch((error) => {
            alert(error.response.data);
        });
    }

    return (
        <>
            <CoverImage src={cover}></CoverImage>
            <FormWrapper page='login'>
                <FormTitle>Entrar</FormTitle>
                <Form onSubmit={submitForm}>
                    <InputWrapper>
                        <IconInput src={email} />
                        <Input
                            name='email'
                            type='email'
                            placeholder='E-mail'
                            onChange={handleForm}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <IconInput src={password} />
                        <Input
                            name='password'
                            type='password'
                            placeholder='Senha'
                            onChange={handleForm}
                        />
                    </InputWrapper>
                    <MainButton>Acessar produtos</MainButton>
                </Form>
            </FormWrapper>
        </>
    )
}