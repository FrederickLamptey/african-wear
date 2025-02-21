import PurchaseTable from '../features/Purchases/PurchaseTable';
import PurchaseTableOperations from '../features/Purchases/PurchaseTableOperations';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

function Purchases() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All purchases</Heading>
        <PurchaseTableOperations />
      </Row>

      <PurchaseTable />
    </>
  );
}

export default Purchases;
