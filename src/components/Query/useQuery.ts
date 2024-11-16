import { ref } from "vue";

export function useQuery<T>(func: () => Promise<T>) {
  const response = ref();
  const onSubmit = async () => {
    const data = await func();
    response.value = JSON.stringify(data, null, 2);
  };
  return { response, onSubmit };
}
