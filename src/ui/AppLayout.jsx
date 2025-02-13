import { Outlet } from 'react-router-dom';
import Header from './Header';
import styled from 'styled-components';

const Main = styled.main`
  padding: 4rem 4.8rem 6.4rem;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`

function AppLayout() {
  return (
    <div>
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </div>
  );
}

export default AppLayout;
