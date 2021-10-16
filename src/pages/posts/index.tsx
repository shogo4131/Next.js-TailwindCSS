import type { NextPage } from 'next';
import Head from 'next/head';

import Header from 'src/components/Header';
import { Posts as PostComponent } from 'src/components/Posts';

const Posts: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <PostComponent />
    </div>
  );
};

export default Posts;
