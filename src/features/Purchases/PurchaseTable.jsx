import PurchaseRow from './PurchaseRow';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import Empty from '../../ui/Empty';
import { useFetchPurchases } from './useFetchPurchases';
import Pagination from '../../ui/Pagination';


function PurchaseTable() {
  const { purchases, totalCount } = useFetchPurchases();


  if (!purchases.length) return <Empty resourceName="purchases"/>

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Item</div>
          <div>Customer</div>
          <div>Status</div>
          <div>Amount</div>
          <div>date</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={purchases}
          render={(purchase) => (
            <PurchaseRow key={purchase.id} purchase={purchase} />
          )}
        />
        <Table.Footer>
          <Pagination count={totalCount} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default PurchaseTable;
