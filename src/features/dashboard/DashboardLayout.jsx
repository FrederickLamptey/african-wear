import styled from 'styled-components';
import { useRecentPurchases } from './useRecentPurchases';
import Spinner from '../../ui/Spinner';
import Stats from './Stats';
import { HiOutlineCurrencyDollar } from 'react-icons/hi2';
import { useRecentInventory } from './useRecentInventory';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* grid-template-rows: auto auto; */
  grid-template-rows: 15rem 15rem;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { purchases, isLoadingRecentPurchases } = useRecentPurchases();
  const { isLoading: isLoadingRecentInventory, inventory } = useRecentInventory()

  if (isLoadingRecentPurchases || isLoadingRecentInventory) return <Spinner />;

  console.log(purchases)
  return (
    <StyledDashboardLayout>
      <Stats purchases={purchases} inventory={ inventory} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout
