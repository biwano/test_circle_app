import { ref } from "vue";

export interface UseQuery<T> {
  response?: T;
  loading: boolean;
  onSubmit: () => void;
}

export function useQuery<T>(func: () => Promise<T>) {
  const useQuery = ref<UseQuery<T>>({
    loading: false,
    onSubmit: async () => {
      useQuery.value = {
        ...useQuery.value,
        response: undefined,
        loading: true,
      };
      try {
        const data = await func();
        const response = data;

        //const response = JSON.stringify(data, null, 2);
        useQuery.value = {
          ...useQuery.value,
          response,
        };
      } finally {
        useQuery.value = {
          ...useQuery.value,
          loading: false,
        };
      }
    },
  });
  return useQuery;
}
