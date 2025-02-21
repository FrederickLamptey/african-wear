import PurchaseTable from '../features/Purchases/PurchaseTable';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

function Purchases() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All purchases</Heading>
        <p>TEST</p>
      </Row>

      <PurchaseTable />
    </>
  );
}

export default Purchases;
