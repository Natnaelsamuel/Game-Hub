import { Game } from "@/entities/Game";
import APICLIENT, { FetchResponse } from "@/services/api-client";
import useGameQueryStore from "@/store";
import { useInfiniteQuery } from "@tanstack/react-query";

const apiClient = new APICLIENT<Game>('/games');

const useGames = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({pageParam = 1}) => 
      apiClient.getAll({
          params: { 
            genres: gameQuery.genreId, 
            parent_platforms: gameQuery.platformId,
            ordering: gameQuery.sortOrder,
            search : gameQuery.searchText,
            page: pageParam,
          },
        }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      console.log('lastPage.next:', lastPage.next);
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    });
}

export default useGames;