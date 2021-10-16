import type { NextPage } from 'next';

import Header from 'src/components/Header';

import { Post } from '../../components/Post/index';

const PostId: NextPage = () => {
  return (
    <div>
      <Header />
      <Post />
    </div>
  );
};

export default PostId;
