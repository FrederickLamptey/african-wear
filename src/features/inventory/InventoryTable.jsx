import styled from 'styled-components';
import Spinner from '../../ui/Spinner';
import InventoryRow from './InventoryRow';
import { useFetchInventory } from './useFetchInventory';
import { useSearchParams } from 'react-router-dom';
import Empty from '../../ui/Empty';

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
  if (!inventory.length) return <Empty resourceName="item(s)" />;
  //filter
  const filterValue = searchParams.get('discount') || 'all';

  let filteredInventory;

  if (filterValue === 'all') filteredInventory = inventory;
  if (filterValue === 'no-discount')
    filteredInventory = inventory.filter((item) => item.discount === 0);
  if (filterValue === 'with-discount')
    filteredInventory = inventory.filter((item) => item.discount > 0);

  // sort
  const sortBy = searchParams.get('sortBy') || 'startDate-asc';
  const [field, direction] = sortBy.split('-');
  const modifier = direction === 'asc' ? 1 : -1;
  // const sortedInventory = filteredInventory.sort((a, b) => (a[field] - b[field]) * modifier);
  // console.log(typeof(sortedInventory))
  let sortedInventory = filteredInventory.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  if (sortBy === 'department-mal')
    sortedInventory = filteredInventory.filter(
      (item) => item.department === 'male'
    );
  if (sortBy === 'department-fem')
    sortedInventory = filteredInventory.filter(
      (item) => item.department === 'female'
    );

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
      {sortedInventory.map((item) => (
        <InventoryRow inventory={item} key={item.id} />
      ))}
    </Table>
  );
}

export default InventoryTable;
