import styled from "styled-components";

const SignInWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FF8E97;
`;

const Logo = styled.img`
    width: 137px;
    height: 134px;
    margin-bottom: 11px;
`;

const StoreName = styled.div`
    font-family: 'Lobster';
    color: white;
    font-size: 36px;
    line-height: 45px;
    text-align: center;
    margin-bottom: 25px;
`;

const RedirectButton = styled.button`
    border: none;
    background-color: #FF8E97;
    color: white;
    font-size: 20px;
    line-height: 23.44px;
    font-weight: 600;
    text-decoration: underline;    
`;

const CoverImage = styled.img`
    width: 100%;
`;

const FormWrapper = styled.div`
    width: 100%;
    height: ${props => props.page === 'signup' ? '76vh' : '68vh'};
    padding: 30px;
    border-radius: 28px;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 2;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FormTitle = styled.div`
    color: #FF8E97;
    font-size: 28px;
    line-height: 32.81px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 28px;
`;

const Form = styled.form`
    width: 100%;
    margin-bottom: 20px;
`;

const InputWrapper = styled.div`
    width: 100%;
    height: 43px;
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 43px;
    background-color: #F5F5F5;
    box-shadow: 0 1px 1px 0 #CACACA;
    display: flex;
    align-items: center;
`;

const IconInput = styled.img`
    width: 16px;
    margin-right: 8px;
`;

const Input = styled.input`
    border: none;
    background-color: #F5F5F5;

    &::placeholder {
        color: #757575;
        font-size: 16px;
        line-height: 18.75px;
        font-weight: 600;
    }

    textarea:focus, &:focus {
        outline: 0;
        font-family: 'Roboto';
        font-size: 16px;
        color: #757575;
    }
`;

export { Logo, StoreName, RedirectButton, SignInWrapper, CoverImage, FormWrapper, FormTitle, Form, InputWrapper, IconInput, Input }