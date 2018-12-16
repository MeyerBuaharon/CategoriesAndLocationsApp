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
    background: #cccccc;
`;

export const CategoriesNavbar = () => (
    <BaseNavbar>
        <NavItem to="/Categories/view">view</NavItem>
        <NavItem to="/Categories/add">add</NavItem>
        <NavItem to="/Categories/remove">remove</NavItem>
        <NavItem to="/Categories/edit">edit</NavItem>

    </BaseNavbar>
);
export const LocationsNavbar = () => (
    <BaseNavbar>
        <NavItem to="/Locations/view">view</NavItem>
        <NavItem to="/Locations/add">add</NavItem>
        <NavItem to="/Locations/remove">remove</NavItem>
        <NavItem to="/Locations/edit">edit</NavItem>

    </BaseNavbar>
);