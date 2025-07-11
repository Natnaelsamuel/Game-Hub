import APICLIENT from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { Platform } from "../entities/Platform";

const apiClient = new APICLIENT<Platform>('/platforms/lists/parents');
const usePlatforms = () => useQuery({
  queryKey: ["platforms"],
  queryFn: apiClient.getAll,
  staleTime: 24 * 60 * 60 * 1000, // 24 hours
  initialData: { 
    count: platforms.length,
     results: platforms,
     next: null},
})

export default usePlatforms;
