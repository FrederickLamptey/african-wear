import { useEffect } from 'react';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import { getInventory } from '../services/apiInventory';

function Inventory() {
  useEffect(function () {
    getInventory().then((data) => console.log(data));
  }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">All Items</Heading>
      <p>TEST</p>
      <img src="https://zwtxzfvoordeefpkxigr.supabase.co/storage/v1/object/public/inventory-images//dinero-kaftan-1.jpg" />
    </Row>
  );
}

export default Inventory;
