import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditInventory } from '../../services/apiInventory';
import toast from 'react-hot-toast';

export function useCreateInventory() {
  //call react query client
  const queryClient = useQueryClient();

  //create inventory in the database
  const { mutate: createInventory, isLoading: isCreating } = useMutation({
    mutationFn: createEditInventory,
    onSuccess: () => {
      toast.success('New inventory successfully created');
      queryClient.invalidateQueries({
        queryKey: ['inventory'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createInventory, isCreating };
}
