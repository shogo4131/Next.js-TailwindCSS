import useSWR from 'swr';

import { Comments } from '../types/type';

export const useComments = () => {
  const { data, error } = useSWR<Comments[], Error>(
    `https://jsonplaceholder.typicode.com/comments`
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
