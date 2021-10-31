import Link from 'next/Link';
import { useUsers } from '../../hooks/useUsers';

export const Users = () => {
  const { data, error, isLoading } = useUsers();

  if (isLoading) {
    return <p>ローディング中</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <ul className="grid grid-cols-3 gap-6 mt-4">
      {data?.map(({ id, name, email }) => (
        <li key={id}>
          <Link href={`users/${id}`}>
            <a className="block p-5 shadow rounded hover:bg-gray-100">
              <h1 className="font-bold truncate">{name}</h1>
              <p className="truncate">{email}</p>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
