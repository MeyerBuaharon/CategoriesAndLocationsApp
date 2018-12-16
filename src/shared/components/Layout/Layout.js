import React from 'react';
import styled from 'styled-components';
import BottomNavbar from '../Navbar/BottomNavbar';

const LayoutWrapper = styled.div`
    display:flex;
    flex-direction:column;
    margin:0;
    width:100vw;
    height: 100vh;
    direction:rtl;
    margin:0;
    padding:0;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background:#ffffff;
    padding-bottom:20px;
`;

const Body =styled.div`
    flex:1;
`;

const Layout =({children})=>(
    <Layout>
        <Body>{children}</Body>
        <BottomNavbar/>
    </Layout>
)

export default Layout;