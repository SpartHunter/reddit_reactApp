import React from 'react';
import Styled from 'styled-components';

import Search from '../search/search.component';
import Profil from '../profil/profil.component'

function Header({logo}){
    return (
        <HeaderNav>
            <NavContent>
                <NavLogo src={logo} alt="logo"/>
                <Search/>
                <Profil/>
            </NavContent>
        </HeaderNav>
    );
}

const HeaderNav = Styled.div `
    height: 50px;
    padding: 5px;
    display:flex;
    flex-direction: row;
    justify-content: center;
    background-color: white;
`;
const NavContent = Styled.div `
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
`;

const NavLogo = Styled.img `
    width: 50px;
`;

export default Header;