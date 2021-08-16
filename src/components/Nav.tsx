import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface navProps {}

const Nav: React.FC<navProps> = () => {
  return (
    <NavContainer>
      <NavLink to="/" href="#">
        Home
      </NavLink>

      <NavLink to="/admin" aria-current="page" href="#">
        Admin
      </NavLink>

      <NavLink
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
        to=""
      >
        Log Out
      </NavLink>
    </NavContainer>
  );
};
export default Nav;

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.gunmetal};
`;
const NavLink = styled(Link)`
  list-style: none;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.light};
  padding: 0 0.6rem;
  &:hover {
    text-decoration: none;
    list-style: none;
    color: ${({ theme }) => theme.colors.lightGray};
    transform: scale(1.02);
  }
`;
