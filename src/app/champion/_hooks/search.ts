import { catchError } from "@/lib/utils/catch-error";
import { useQuery } from "@tanstack/react-query";
import { searchAction } from "../_actions/search";

export function useSearch(value: string) {
  const { data, error, isError, isPending } = useQuery({
    queryKey: ["search list"],
    queryFn: async () => {
      const [response, error] = await catchError(searchAction(value));

      if (error) {
        throw Error(error.message);
      }
      if (response) {
        return response;
      }
    },
  });

  return { data, isError, error, isPending };
}
