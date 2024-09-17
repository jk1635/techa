import { useQuery } from '@tanstack/react-query';

import ApiClient from '@libs/ApiClient';

import { Techa } from '@/types';

const useFetchData = () => {
  const query = useQuery<Techa[]>({
    queryKey: ['fetchAll'],
    queryFn: async () => {
      return await Promise.all(Array.from({ length: 1000 }, (_, i) => ApiClient.get<Techa>(`/techa/${i}.json`)));
    },
    staleTime: 5 * 60 * 1000,
  });
  return { ...query };
};

export default useFetchData;
