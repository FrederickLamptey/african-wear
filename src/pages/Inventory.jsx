import Heading from '../ui/Heading';
import Row from '../ui/Row';
import { getInventory } from '../services/apiInventory';
import InventoryTable from '../features/inventory/InventoryTable';

function Inventory() {

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Items</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <InventoryTable />
      </Row>
    </>
  );
}

export default Inventory;
