import { useQuery } from '@tanstack/react-query';
import { getPurchases } from '../../services/apiPurchases';

export function useFetchPurchases() {
  const {
    isLoading,
    data: purchases = [],
    error,
  } = useQuery({
    queryKey: ['purchases'],
    queryFn: getPurchases,
  });

  return { isLoading, error, purchases };
}
