import { useQuery } from '@tanstack/react-query';
import { subDays } from 'date-fns';
import { useSearchParams } from 'react-router-dom';
import { getPurchasesAfterDate } from '../../services/apiPurchases';

export function useRecentPurchases() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get('last')
    ? 7
    : Number(searchParams.get('last'));
  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading, data: purchases } = useQuery({
    queryFn: () => getPurchasesAfterDate(queryDate),
    queryKey: ['purchases', `last-${numDays}`],
  });

  return { isLoading, purchases };
}
