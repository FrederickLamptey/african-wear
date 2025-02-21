import PurchaseRow from './PurchaseRow';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import Empty from '../../ui/Empty';
import { useFetchPurchases } from './useFetchPurchases';


function PurchaseTable() {
  const { isLoading, error, purchases } = useFetchPurchases();
  console.log(purchases)

  if (!purchases.length) return <Empty resourceName="purchases"/>

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Item</div>
          <div>Guest</div>
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
      </Table>
    </Menus>
  );
}

export default PurchaseTable;
