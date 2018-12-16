import React from 'react';
import styled from 'styled-components';
import NavItem from './Navitem';

const BaseNavbar = styled.ul`
    padding:0;
    list-style:none;
    display:flex;
    flex-flow:column;
    align-items:center;
    z-index:1;
    box-shadow:0 2px 3px #333333;
    background:black;
`;

const BottomNavbar = () => (
    <BaseNavbar>
        <NavItem to="/Categories">Categories</NavItem>
        <NavItem to="/Locations">Locations</NavItem>
    </BaseNavbar>
);

export default BottomNavbar;