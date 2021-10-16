import { fetcher } from 'src/util/fetcher';
import useSWR from 'swr';

import { PostList } from '../types/posts';

export const usePosts = () => {
  const { data, error } = useSWR<PostList[], Error>(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};
