import { useRouter } from 'next/router';
import useSWR from 'swr';
import { fetcher } from 'src/util/fetcher';

import { PostList, UserInfo } from '../types/posts';

export const usePost = () => {
  const { query } = useRouter();
  const { data: post, error: postError } = useSWR<PostList, Error>(
    query.id ? `https://jsonplaceholder.typicode.com/posts/${query.id}` : null,
    fetcher
  );

  const { data: user, error: userError } = useSWR<UserInfo, Error>(
    post?.id ? `https://jsonplaceholder.typicode.com/users/${post.id}` : null,
    fetcher
  );

  return {
    post,
    user,
    error: postError || userError,
    isLoading: !post && !postError && !user && !userError,
  };
};
