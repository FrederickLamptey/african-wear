import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteInventory as deleteInventoryApi } from '../../services/apiInventory';
import toast from 'react-hot-toast';

export function useDeleteInventory() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteInventory } = useMutation({
    mutationFn: deleteInventoryApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['inventory'],
      });
      toast.success('Item successfully deleted!');
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteInventory };
}
