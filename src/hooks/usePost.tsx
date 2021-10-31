import { useRouter } from 'next/router';
import useSWR from 'swr';

import { PostList, UserInfo } from '../types/type';

export const usePost = () => {
  const { query } = useRouter();
  const { data: post, error: postError } = useSWR<PostList, Error>(
    query.id ? `https://jsonplaceholder.typicode.com/posts/${query.id}` : null
  );

  const { data: user, error: userError } = useSWR<UserInfo, Error>(
    post?.id ? `https://jsonplaceholder.typicode.com/users/${post.id}` : null
  );

  return {
    post,
    user,
    error: postError || userError,
    isLoading: !post && !postError && !user && !userError,
  };
};
