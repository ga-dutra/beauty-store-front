import { CoverImage, FormWrapper, FormTitle, Form, InputWrapper, IconInput, Input } from '../../styles/SignInWrapper.js';
import { MainButton } from '../../styles/MainButton.js';
import cover from '../../assets/img/cover-login.svg';
import email from '../../assets/img/email.svg';
import password from '../../assets/img/password.svg';

export default function SignUpPage () {
    return (
        <>
            <CoverImage src={cover}></CoverImage>
            <FormWrapper page='login'>
                <FormTitle>Entrar</FormTitle>
                <Form>
                    <InputWrapper>
                        <IconInput src={email} />
                        <Input
                            name='email'
                            type='email'
                            placeholder='E-mail'
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <IconInput src={password} />
                        <Input
                            name='password'
                            type='password'
                            placeholder='Senha'
                        />
                    </InputWrapper>
                </Form>
                <MainButton>Acessar produtos</MainButton>
            </FormWrapper>
        </>
    )
}