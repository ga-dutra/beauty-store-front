import { Logo, StoreName, RedirectButton, SignInWrapper } from '../../styles/SignInWrapper.js';
import { MainButton } from '../../styles/MainButton.js';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';

export default function SignInPage () {
    return (
        <SignInWrapper>
            <Logo src={logo}></Logo>
            <StoreName>Beauty Store</StoreName>
            <Link to='/login'>
                <MainButton function='sign-in'>Entrar</MainButton>
            </Link>
            <Link to='/sign-up'>
                <RedirectButton>Criar uma conta</RedirectButton>
            </Link>
        </SignInWrapper>
    )
}