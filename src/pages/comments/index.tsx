import { NextPage } from 'next';
import Head from 'next/head';
import Header from 'src/components/Header';
import { Comments as CommentsComponent } from 'src/components/Comments';

const Comments: NextPage = () => {
  return (
    <>
      <Head>
        <title>Comment Page</title>
      </Head>
      <Header />
      <CommentsComponent />
    </>
  );
};

export default Comments;
