import Link from 'next/Link';
import { usePosts } from 'src/hooks/usePosts';

export const Posts = () => {
  const { data, error, isLoading, isEmpty } = usePosts();

  if (isLoading) {
    return <p>ローディング中</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isEmpty) {
    return <p>表示できるデータがありませんでした</p>;
  }

  return (
    <ol>
      {data?.map(({ id, body }) => (
        <li key={id}>
          <Link href={`posts/${id}`}>{body}</Link>
        </li>
      ))}
    </ol>
  );
};
