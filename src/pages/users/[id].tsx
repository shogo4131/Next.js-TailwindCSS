import type { NextPage } from 'next';

import Header from 'src/components/Header';

import { User } from '../../components/User/index';

const UserId: NextPage = () => {
  return (
    <div>
      <Header />
      <User />
    </div>
  );
};

export default UserId;
