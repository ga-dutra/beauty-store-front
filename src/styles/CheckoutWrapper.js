import styled from "styled-components";

const Body = styled.div`
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(#FFD3B6, #FFABA6);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Icon = styled.img`
    margin-bottom: 15px;
`;

const Text = styled.div`
    width: 215px;
    font-weight: 600;
    font-size: 24px;
    line-height: 28.13px;
    text-align: center;
    color: white;
`;

export { Body, Icon, Text };