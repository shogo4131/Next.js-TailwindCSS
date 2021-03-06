import type { NextPage } from 'next';
import Head from 'next/head';

import Header from 'src/components/Header';

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <div>
        <h1>Next.js講座</h1>
      </div>
    </div>
  );
};

export default Index;
