import { Outlet } from 'react-router-dom';
import Header from './Header';
import styled from 'styled-components';

const Main = styled.main`
  padding: 4rem 4.8rem 6.4rem;
`;

function AppLayout() {
  return (
    <div>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
