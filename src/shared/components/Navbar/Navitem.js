import React from 'react';
import styled from 'styled-components';
import {NavLink as BaseLink} from 'react-router-dom';

const Wrapper = styled.li`
    margin:10px 0;
    box-sizing:border-box;
    display: block;
    width:100%;
    @media(min-width:500px){
        margin:0;
        display:flex;
        height:100%;
        width:auto;
        align-items:center;
    }
`;

const Link = styled(BaseLink)`
    color:#333333;
    text-decoration:none;
    width:100%;
    box-sizing:border-box;
    display:block;
    cursor:pointer;
    &:hover,&:focus{
        text-decoration:none;
        color:white;
    }
    @media(min-width:500px){
        color:white;
        height:100%;
        padding:16px 16px;
        border-bottom:4px solid transparent;
        &:hover{
            transform:0.3;
            background-color:#333333;
            border-bottom:4px solid #cfcfcf;
            color:white;
        }
    }
`;

const NavItem = styled(({className, ...rest})=>(
    <Wrapper>
        <Link activeClassName={className} {...rest}></Link>
    </Wrapper>
))`
background-color:#cfcfcf;
border-bottom:4px solid #cfcfcf;
color:white;
`;

export default NavItem;