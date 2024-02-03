import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1184px;
  margin: 0 auto;
`;

export const Logo = styled.p`
  font-size: 36px;
  font-weight: 700;
  color: #000;
  /* font-style: italic; */
  text-transform: uppercase;
`;

export const LogoColor = styled.span`
  color: #1677ff;
`;

export const Nav = styled.nav`
  display: flex;

  gap: 18px;
  margin: 24px 0;
`;

export const NavLinkStyled = styled(NavLink)`
  &.active {
    color: #1677ff;
  }
`;
