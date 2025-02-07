import styled from "styled-components";

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

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

function Header() {
  return (
    <header>
      <Nav>
        <HeaderDiv>
          <a href="#">
            <img src="#" alt="" />
          </a>
          <HeaderUl>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Purchases</a>
            </li>
            <li>
              <a href="#">Inventory</a>
            </li>
            <li>
              <a href="#">Users</a>
            </li>
          </HeaderUl>
        </HeaderDiv>

        <HeaderDiv>
          <HeaderUl>
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Logout</a>
            </li>
          </HeaderUl>
        </HeaderDiv>
      </Nav>
    </header>
  );
}

export default Header;
