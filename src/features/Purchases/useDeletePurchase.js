import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePurchase as deletePurchaseApi } from '../../services/apiPurchases';
import toast from "react-hot-toast";

function useDeletePurchase() {
  //call react query client
    const queryClient = useQueryClient();
    
    const { isLoading: isDeleting, mutate: deletePurchase } = useMutation({
      mutationFn: deletePurchaseApi,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['purchases'],
        });
        toast.success('Item successfully deleted!');
      },
      onError: (err) => toast.error(err.message),
    });

    return {isDeleting, deletePurchase}
}

export default useDeletePurchase
