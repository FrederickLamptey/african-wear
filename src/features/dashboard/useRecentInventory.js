import { useQuery } from '@tanstack/react-query';
import { subDays } from 'date-fns';
import { useSearchParams } from 'react-router-dom';
import { getInventoryAfterDate } from '../../services/apiInventory';

export function useRecentInventory() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get('last')
    ? 7
    : Number(searchParams.get('last'));
  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading, data: inventory } = useQuery({
    queryFn: () => getInventoryAfterDate(queryDate),
    queryKey: ['Inventory', `last-${numDays}`],
  });

  return { isLoading, inventory };
}
