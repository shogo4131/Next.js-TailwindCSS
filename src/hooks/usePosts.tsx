import useSWR from 'swr';

import { PostList } from '../types/type';

export const usePosts = () => {
  const { data, error } = useSWR<PostList[], Error>(
    'https://jsonplaceholder.typicode.com/posts/?_limit=10'
  );

  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};
