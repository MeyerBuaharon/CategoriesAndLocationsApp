import styled from "styled-components";
import Toolbar from "@material-ui/core/Toolbar";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: auto;
`;

export const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const NavbarList = styled.ul`
  align-self: center;
  margin: auto;
  justify-content: center;
  flex-grow: 1;
  list-style-type: none;
  display: flex;
  width: 100%;
  padding: 0;
`;

export const Title = styled.li`
  flex-grow: 1;
`;

export const NavbarItem = styled.li`
  flex-grow: 1;
`;

export const FormContainer = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;
export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const Label = styled.label``;

export const BasedBottomNavbar = styled.div`
  bottom: 0;
  z-index: 1;
  width: 100%;
  text-align: center;
`;
export const BottomNavbarItem = styled.li`
  flex-grow: 1;
`;
export const BottomNavbarList = styled.ul`
  align-self: center;
  justify-content: center;
  list-style-type: none;
  display: flex;
  margin-top: auto;
  padding: 0;
  width: 100%;
  margin-bottom: 0;
`;
