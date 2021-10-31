import { useUser } from 'src/hooks/useUser';

export const User = () => {
  const { data, error, isLoading } = useUser();

  if (isLoading) {
    return <p>ローディング中</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <h1 className="font-bold text-3xl mt-6">{data?.username}</h1>
      <p className="mt-4">{data?.email}</p>
    </div>
  );
};
