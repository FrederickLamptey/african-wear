import SortBy from '../../ui/SortBy';
import Filter from '../../ui/Filter';
import TableOperations from '../../ui/TableOperations';

function PurchaseTableOperations() {
  return (
    <TableOperations>
      <Filter
        filteredField="status"
        options={[
          { value: 'all', label: 'All' },
          { value: 'received', label: 'Received' },
          { value: 'unreceived', label: 'Unreceived' },
        ]}
      />

      <SortBy
        options={[
          { value: 'date-desc', label: 'Sort by date (recent first)' },
          { value: 'date-asc', label: 'Sort by date (earlier first)' },
          {
            value: 'itemPrice-desc',
            label: 'Sort by amount (high first)',
          },
          { value: 'itemPrice-asc', label: 'Sort by amount (low first)' },
        ]}
      />
    </TableOperations>
  );
}

export default PurchaseTableOperations;
