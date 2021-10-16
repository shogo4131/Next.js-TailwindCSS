import Head from 'next/head';
import { usePost } from 'src/hooks/usePost';

export const Post = () => {
  const { post, user, error, isLoading } = usePost();

  if (isLoading) {
    return <p>ローディング中</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <div>
        <h1>{post?.title}</h1>
        <p>{post?.body}</p>
        <div>{user?.name}</div>
      </div>
    </>
  );
};
