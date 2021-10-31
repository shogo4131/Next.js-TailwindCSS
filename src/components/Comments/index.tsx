import { useComments } from 'src/hooks/useComments';

export const Comments = () => {
  const { data, error, isLoading } = useComments();

  if (isLoading) {
    return <p>ローディング中</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <ul className="space-y-4 mt-4">
      {data?.map(({ id, name }) => (
        <li key={id} className="border-b pb-1 hover:text-blue-500">
          {name}
        </li>
      ))}
    </ul>
  );
};
