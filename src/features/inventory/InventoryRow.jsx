import styled from 'styled-components';
import { formatCurrency } from '../../utils/helpers';
import { useState } from 'react';
import CreateInventoryForm from './CreateInventoryForm';
import { useDeleteInventory } from './useDeleteInventory';
import { HiPencil, HiSquare2Stack, HiTrash } from 'react-icons/hi2';
import { useCreateInventory } from './useCreateInventory';

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;
  height: 14rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  height: 8rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Item = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`;

const Price = styled.div`
  font-family: 'Sono';
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: 'Sono';
  font-weight: 500;
  color: var(--color-green-700);
`;

function InventoryRow({ inventory }) {
  const [showForm, setShowForm] = useState(false);
  const { isDeleting, deleteInventory } = useDeleteInventory();
  const { createInventory, isCreating } = useCreateInventory();

  const {
    id: inventoryId,
    name,
    department,
    regularPrice,
    discount,
    image,
    description
  } = inventory;


  function handleDuplicate() {
    createInventory({
      name: `Copy of ${name}`,
      department,
      regularPrice,
      discount,
      image,
      description,
    });
  }

  
  return (
    <>
      <TableRow role="row">
        <Img src={image} />
        <Item>{name}</Item>
        <div>{department}</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ?<Discount>{formatCurrency(discount)}</Discount> : <span>&mdash;</span>}
        <div>
          <button disabled={isCreating} onClick={handleDuplicate}><HiSquare2Stack /></button>
          <button onClick={() => setShowForm((showForm) => !showForm)}>
            <HiPencil />
          </button>
          <button onClick={() => deleteInventory(inventoryId)} disabled={isDeleting}>
            <HiTrash />
          </button>
        </div>
      </TableRow>
      {showForm && <CreateInventoryForm inventoryToEdit={ inventory } />}
    </>
  );
}

export default InventoryRow;
