import { useQuery } from '@tanstack/react-query';
import { getPurchases } from '../../services/apiPurchases';
import { useSearchParams } from 'react-router-dom';

export function useFetchPurchases() {
  const [searchParams] = useSearchParams();

  //FILTER
  // get state value of filter from url
  const filterValue = searchParams.get('status');

//conditional filter value setting 
  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { field: 'status', value: filterValue, method: 'eq' };
  
  //SORT
  //get state value of sorting from url
  const sortByRaw = searchParams.get("sortBy") || "date-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };
  
  const {
    isLoading,
    data: purchases = [],
    error,
  } = useQuery({
    queryKey: ['purchases', filter, sortBy],
    queryFn: () => getPurchases({ filter, sortBy }),
  });

  return { isLoading, error, purchases };
}
