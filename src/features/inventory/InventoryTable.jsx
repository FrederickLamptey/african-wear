import styled from 'styled-components';
import Spinner from '../../ui/Spinner';
import InventoryRow from './InventoryRow';
import { useFetchInventory } from './useFetchInventory';
import { useSearchParams } from 'react-router-dom';

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

function InventoryTable() {
  const { isLoading, inventory } = useFetchInventory();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  const filterValue = searchParams.get('discount') || 'all';

  let filteredInventory;

  if (filterValue === 'all') filteredInventory = inventory;
  if (filterValue === 'no-discount')
    filteredInventory = inventory.filter((item) => item.discount === 0);
  if (filterValue === 'with-discount')
    filteredInventory = inventory.filter((item) => item.discount > 0);

  return (
    <Table role="table">
      <TableHeader role="row">
        <div></div>
        <div>Item</div>
        <div>Department</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </TableHeader>
      {filteredInventory.map((item) => (
        <InventoryRow inventory={item} key={item.id} />
      ))}
    </Table>
  );
}

export default InventoryTable;
