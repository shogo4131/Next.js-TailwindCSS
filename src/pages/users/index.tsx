import type { NextPage } from 'next';
import Head from 'next/head';
import Header from 'src/components/Header';
import { Users as UserComponent } from 'src/components/Users';

const Users: NextPage = () => {
  return (
    <>
      <Head>
        <title>Users Page</title>
      </Head>
      <Header />
      <UserComponent />
    </>
  );
};

export default Users;
