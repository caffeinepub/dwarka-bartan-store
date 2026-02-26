import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useSubmitEnquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      name,
      phone,
      message,
      requestCallback,
    }: {
      name: string;
      phone: string;
      message: string;
      requestCallback: boolean;
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      await actor.submitEnquiry(name, phone, message, requestCallback);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['enquiries'] });
    },
  });
}
