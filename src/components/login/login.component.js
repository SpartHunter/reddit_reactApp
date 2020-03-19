import React, {} from 'react';
import Styled from 'styled-components';
import ViewBackground from '../../images/login.jpg'

function LogIn(){

    return (
        <LogContent>
            <LogView> </LogView>
            <LogForm>
                <LogH1>SIGN IN</LogH1>
                <LogInput type="text" name="username" placeholder="USERNAME"/>
                <LogInput type="password" name="password" placeholder="PASSWORD"/>
                <LogButton type="submit">SIGN IN</LogButton>
            </LogForm>
            <LogForget>
                <LogLink href="#">Forgot Username</LogLink>
                <span> . </span>
                <LogLink href="#">Forgot password</LogLink>
            </LogForget>
            <LogNewUser>
                <LogH3>New to Reddit ? <LogLink href="#">SIGN UP</LogLink></LogH3>
            </LogNewUser>

        </LogContent>
    );
}

const LogContent = Styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width : 100vw;
    height: 100vh;
`;

const LogView = Styled.div`
    background-image : url(${ViewBackground});
    background-position: center;
    background-size: contain;
    width: 90%;
    height: 30%;
    background-repeat: no-repeat;
`;

const LogForm = Styled.div`
    display: inline-grid;
    justify-content: center;
    align-items: center;
    grid-gap: 14px;
    padding: 11px;
    text-align: center;
`;

const LogForget = Styled.div`
    padding: 40px;
`;

const LogNewUser = Styled.div`
`;

const LogLink = Styled.a`
    text-decoration: none;
    color: #ff4500;
`;

const LogH3 = Styled.h3`
`;

const LogH1 = Styled.h1`
    color: #ff4500;
`;

const LogInput = Styled.input`
    text-align: center;
    &:focus {
        outline: none;
    }
`;

const LogButton = Styled.button`
    background-color: #ff4500;
    color: white;
    border : none;
    border-radius : 5px;
    padding: 10px;
    width: 60%;
    justify-self: center;
    &:active{
        background-color: gray;
        color: black;
    }
`;

export default LogIn;