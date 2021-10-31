import { ReactNode } from 'react';
import type { NextPage, GetServerSideProps } from 'next';

import Header from 'src/components/Header';
import { SWRConfig } from 'swr';

import { User } from '../../components/User/index';
import { UserInfo } from '../../types/type';

interface Props {
  children: ReactNode;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;

  const API_URL = `https://jsonplaceholder.typicode.com/users/${id}`;

  const user = await fetch(API_URL);

  const userData: UserInfo[] = await user.json();

  return {
    props: {
      fallback: {
        [API_URL]: userData,
      },
    },
  };
};

const UserId: NextPage = (props) => {
  const { fallback } = props;

  return (
    <SWRConfig value={{ fallback }}>
      <Header />
      <User />
    </SWRConfig>
  );
};

export default UserId;
