import Heading from '../ui/Heading';
import Row from '../ui/Row';
import { getInventory } from '../services/apiInventory';
import InventoryTable from '../features/inventory/InventoryTable';
import { useState } from 'react';
import Button from '../ui/Button';
import CreateInventoryForm from '../features/inventory/CreateInventoryForm';
import InventoryTableOperations from '../features/inventory/InventoryTableOperations';

function Inventory() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Items</Heading>
        <InventoryTableOperations />
      </Row>

      <Row>
        <InventoryTable />

        <Button onClick={() => setShowForm((showForm) => !showForm)}>
          Add new item
        </Button>
        {showForm && <CreateInventoryForm />}
      </Row>
    </>
  );
}

export default Inventory;
