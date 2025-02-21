import TableOperations from '../../ui/TableOperations';
import Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';

function InventoryTableOperations() {
  return (
    <TableOperations>
      <Filter
        filteredField="discount"
        options={[
          { value: 'all', label: 'All' },
          { value: 'no-discount', label: 'No discount' },
          { value: 'with-discount', label: 'With discount' },
        ]}
      />

      <SortBy
        options={[
          { value: 'name-asc', label: 'Sort by name (A-Z)' },
          { value: 'name-desc', label: 'Sort by name (Z-A)' },
          { value: 'regularPrice-asc', label: 'Sort by price (low first)' },
          { value: 'regularPrice-desc', label: 'Sort by price (high first)' },
          { value: 'department-mal', label: 'Sort by department (male)' },
          { value: 'department-fem', label: 'Sort by department (female)' },
        ]}
      />
    </TableOperations>
  );
}

export default InventoryTableOperations;
