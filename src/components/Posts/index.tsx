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
    <ul className="space-y-4 mt-4 mb-7">
      {data?.map(({ id, body, title }) => (
        <li key={id}>
          <Link href={`posts/${id}`}>
            <a className="group">
              <h1 className="font-bold group-hover:text-blue-500">{title}</h1>
              <p className="text-sm text-gray-400 group-hover:text-blue-500">
                {body}
              </p>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
