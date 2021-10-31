import useSWR from 'swr';

import { UserInfo } from '../types/type';

export const useUsers = () => {
  const { data, error } = useSWR<UserInfo[], Error>(
    'https://jsonplaceholder.typicode.com/users'
  );

  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};
