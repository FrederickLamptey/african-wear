import styled from 'styled-components';
import { useRecentPurchases } from './useRecentPurchases';
import Spinner from '../../ui/Spinner';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* grid-template-rows: auto 34rem auto; */
  grid-template-rows: 1fr 1fr;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { purchases, isLoading } = useRecentPurchases();

  if (isLoading) return <Spinner />

  console.log(purchases)
  return (
    <StyledDashboardLayout>
      <div>Inventory</div>
      <div></div>
      <div>Sales</div>
      <div>Purchases</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout
