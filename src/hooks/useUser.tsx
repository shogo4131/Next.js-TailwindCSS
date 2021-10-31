import { useRouter } from 'next/router';
import useSWR from 'swr';

import { UserInfo } from '../types/type';

export const useUser = () => {
  const { query } = useRouter();
  const { data, error } = useSWR<UserInfo, Error>(
    query?.id ? `https://jsonplaceholder.typicode.com/users/${query.id}` : null
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
