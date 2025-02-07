import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { HiOutlineHome } from 'react-icons/hi2';
import { HiOutlineCurrencyDollar } from 'react-icons/hi2';
import { HiOutlineListBullet } from 'react-icons/hi2';
import { HiOutlineUserPlus } from 'react-icons/hi2';
import { HiOutlineUser } from 'react-icons/hi2';
import { HiOutlineLockClosed } from 'react-icons/hi2';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function Header() {
  return (
    <header>
      <Nav>
        <HeaderDiv>
          <StyledNavLink to="#">
            <img src="#" alt="" />
          </StyledNavLink>
          <HeaderUl>
            <li>
              <StyledNavLink to="/dashboard">
                <HiOutlineHome />
                <span>Home</span>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/purchases">
                <HiOutlineCurrencyDollar />
                <span>Purchases</span>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="inventory">
                <HiOutlineListBullet />
                <span>Inventory</span>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="users">
                <HiOutlineUserPlus />
                <span>Users</span>
              </StyledNavLink>
            </li>
          </HeaderUl>
        </HeaderDiv>

        <HeaderDiv>
          <HeaderUl>
            <li>
              <StyledNavLink to="/account">
                <HiOutlineUser />
                <span>Account</span>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/login">
                <HiOutlineLockClosed />
                <span>Logout</span>
              </StyledNavLink>
            </li>
          </HeaderUl>
        </HeaderDiv>
      </Nav>
    </header>
  );
}

export default Header;
