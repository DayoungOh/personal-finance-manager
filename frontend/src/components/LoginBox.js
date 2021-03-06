import React from 'react';
import styled from 'styled-components';

const LoginBoxBlock = styled.div`
    position: fixed;
    background: white;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    box-shadow: 0 0 9px rgba(0, 0, 0, 0.04);

    margin: 0 auto;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 20px;
    padding-right: 20px;

    display: flex;
    flex-direction: column;
`;

function LoginBox({ children }) {
    return <LoginBoxBlock>{ children }</LoginBoxBlock>
}

export default LoginBox;