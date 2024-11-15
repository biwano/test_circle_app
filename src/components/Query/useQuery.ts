import { ref } from "vue";

export function useQuery(func: () => Promise<any>) {
  const response = ref();
  const onSubmit = async () => {
    const data = await func();
    response.value = JSON.stringify(data, null, 2);
  };
  return { response, onSubmit };
}
