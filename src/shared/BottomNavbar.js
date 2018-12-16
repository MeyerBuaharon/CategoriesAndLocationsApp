import React from "react";
import { routes } from "../routes";
import { BrowserRouter, Route, withRouter, Redirect } from "react-router-dom";
import styled from "styled-components";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Icon from "@material-ui/core/Icon";
import { BottomNavbarList } from "./styles";
import Categories from "../components/Categories/Categories";
import Locations from "../components/Locations/Locations";
import { Layout, Label } from "../shared/styles";
import { NavLink } from "react-router-dom";

const Wrapper = styled.li`
  box-sizing:border-box;
  display: block;
  width:100%;
  @media(min-width:500px){
    margin:0;
    display: block;
    height:100%;
    width:auto:
    align-items:center;
  }
`;

const Link = styled(NavLink)`
  color: black;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  display: block;
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
  &:hover,
  &:focus {
    text-decoration: none;
    color: white;
  }
  @media (min-width: 500px) {
    height: 100%;
    padding: 16px 10px;
    border-bottom: 4px solid transparent;
    &:hover {
      transition: 0.3s;
      background-color: #3f51b5;
      border-bottom: 4px solid #3f51b5;
      color: white;
    }
  }
`;

const NavItem = styled(({ className, ...rest }) => (
  <Wrapper>
    <Link activeClassName={className} {...rest} />
  </Wrapper>
))`
  background-color: #3f51b5;
  border-bottom: 4px solid #3f51b5;
  display: flex;
  color: white;
`;

const StyledBottomNavigation = styled(BottomNavigation)`
  width: 100%;
  &&& {
    height: auto;
  }
`;

const RouteNav = withRouter(({ history }) => (
  <BottomNavbarList>
    {routes.map((item, idx) => (
      <NavItem key={idx} to={`/${item.path}`}>
        <Label>{item.label}</Label>
        <Icon>{item.icon}</Icon>
      </NavItem>
    ))}
  </BottomNavbarList>
));

const BottomNavbar = () => (
  <StyledBottomNavigation>
    <BrowserRouter>
      <Layout>
        <Route exact path="/" render={() => <Redirect to="/categories" />} />
        <Route path="/categories/" component={Categories} />
        <Route path="/locations" component={Locations} />
        <RouteNav />
      </Layout>
    </BrowserRouter>
  </StyledBottomNavigation>
);

export default BottomNavbar;
