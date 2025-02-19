import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditInventory } from '../../services/apiInventory';
import toast from 'react-hot-toast';

export function useEditInventory() {
  //call react query client
  const queryClient = useQueryClient();

  //Edit inventory in the database
  const { mutate: editInventory, isLoading: isEditing } = useMutation({
    mutationFn: ({ newInventoryData, id }) =>
      createEditInventory(newInventoryData, id),
    onSuccess: () => {
      toast.success('Inventory successfully edited');
      queryClient.invalidateQueries({
        queryKey: ['inventory'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editInventory, isEditing };
}
