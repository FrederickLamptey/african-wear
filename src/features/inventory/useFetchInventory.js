import { useQuery } from '@tanstack/react-query';
import { getInventory } from '../../services/apiInventory';

export function useFetchInventory() {
  const {
    isLoading,
    data: inventory,
    error,
  } = useQuery({
    queryKey: ['inventory'],
    queryFn: getInventory,
  });

  return { isLoading, error, inventory };
}
