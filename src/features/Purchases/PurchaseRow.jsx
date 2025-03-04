import styled from 'styled-components';
import { format } from 'date-fns';
import Tag from '../../ui/Tag';
import Table from '../../ui/Table';
import { formatCurrency } from '../../utils/helpers';
import { HiTrash } from 'react-icons/hi2';
import useDeletePurchase from './useDeletePurchase';

const Item = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: 'Sono';
  font-weight: 500;
`;

function PurchaseRow({
  purchase: {
    id: purchaseId,
    created_at,
    status,
    itemPrice,
    guests: { fullName: guestName, email } = [],
    inventory: { name: inventoryName } = [],
  },
}) {
  const { isDeleting, deletePurchase } = useDeletePurchase();

  const statusToTagName = {
    unreceived: 'red',
    received: 'green',
  };

  return (
    <Table.Row>
      <Item>{inventoryName}</Item>

      <Stacked>
        <span>{guestName}</span>
        <span>{email}</span>
      </Stacked>

      <Tag type={statusToTagName[status]}>{status.replace('-', ' ')}</Tag>

      <Amount>{formatCurrency(itemPrice)}</Amount>
      <Stacked>
        <span>{format(new Date(created_at), 'MMM dd yyyy')}</span>
      </Stacked>
      <div>
        <button
          onClick={() => deletePurchase(purchaseId)}
          disabled={isDeleting}
        >
          <HiTrash />
        </button>
      </div>
    </Table.Row>
  );
}

export default PurchaseRow;
