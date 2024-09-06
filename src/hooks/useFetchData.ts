import { useQuery } from '@tanstack/react-query';

import ApiClient from '@libs/ApiClient.ts';

const useFetchData = () => {
  const query = useQuery({
    queryKey: ['fetchAll'],
    queryFn: async () => {
      return await Promise.all(Array.from({ length: 1000 }, (_, i) => ApiClient.get(`/techa/${i}.json`)));
    },
  });
  return { ...query };
};

export default useFetchData;
