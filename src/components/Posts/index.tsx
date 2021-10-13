import React, { useState, useCallback, useEffect } from 'react';

import { PostList } from '../../types/posts';

export const Posts = () => {
  const [posts, setPosts] = useState<PostList[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown | string>(null);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');

      if (!res.ok) {
        throw new Error('エラーが発生したためデータが表示されませんでした');
      }

      const resData = await res.json();
      setPosts(resData);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (loading) {
    return <p>ローディング中</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (posts.length === 0) {
    return <p>表示できるデータがありませんでした</p>;
  }

  return (
    <ol>
      {posts.map(({ id, body }) => (
        <li key={id}>{body}</li>
      ))}
    </ol>
  );
};
