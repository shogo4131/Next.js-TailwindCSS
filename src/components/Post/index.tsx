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
      <h1 className="font-bold text-3xl mt-4">{user?.name}</h1>
      <div className="mt-7">
        <p className="text-2xl mb-3">{post?.title}</p>
        <p className="text-xl ">{post?.body}</p>
      </div>
    </>
  );
};
