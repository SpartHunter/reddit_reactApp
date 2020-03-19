import React, {} from 'react';
import Styled from 'styled-components';
import ProfilImg from '../../images/profil.jpg'

function User(){

    return (
        <UserContent>
            <UserView>
                <UserImg src={ProfilImg} alt=""/>
                <UserH4>R/BOB-ALBERTO</UserH4>
            </UserView>
        </UserContent>
    );
}

const UserContent = Styled.div`
`;

const UserView = Styled.div`
    display: flex;
    align-items: center;
    height: 42px;
`;

const UserImg = Styled.img`
    width: 25px;
    border-radius: 22px;
    height: 25px;
    padding: 8px;
`;

const UserH4 = Styled.h4`
    margin: 0;
    font-size: 12px;
`;


export default User;