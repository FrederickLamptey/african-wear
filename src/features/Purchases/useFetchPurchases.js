import { useQuery } from '@tanstack/react-query';
import { getPurchases } from '../../services/apiPurchases';
import { useSearchParams } from 'react-router-dom';

export function useFetchPurchases() {
  const [searchParams] = useSearchParams();

  // get state value of filter from url
  const filterValue = searchParams.get('status');

//conditional filter value setting 
  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { field: 'status', value: filterValue, method: 'eq' };
  
  const {
    isLoading,
    data: purchases = [],
    error,
  } = useQuery({
    queryKey: ['purchases', filter],
    queryFn: () => getPurchases({ filter }),
  });

  return { isLoading, error, purchases };
}
