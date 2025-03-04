import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getPurchases } from '../../services/apiPurchases';
import { useSearchParams } from 'react-router-dom';

export function useFetchPurchases() {
  const queryClient = useQueryClient();
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
  const sortByRaw = searchParams.get('sortBy') || 'date-desc';
  const [field, direction] = sortByRaw.split('-');
  const sortBy = { field, direction };

  //PAGINATION
  //get current page
  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

  //QUERY
  const { isLoading, data, error } = useQuery({
    queryKey: ['purchases', filter, sortBy, page],
    queryFn: () => getPurchases({ filter, sortBy, page }),
  });

  //PRE-FETCHING
  queryClient.prefetchQuery({
    queryKey: ['purchases', filter, sortBy, page + 1],
    queryFn: () => getPurchases({ filter, sortBy, page: page + 1 }),
  });

    queryClient.prefetchQuery({
      queryKey: ['purchases', filter, sortBy, page - 1],
      queryFn: () => getPurchases({ filter, sortBy, page: page - 1 }),
    });

  return {
    isLoading,
    error,
    purchases: data?.data || [], // Extract purchases (default to empty array)
    totalCount: data?.count || 0, // Extract total count (default to 0)
  };
}
