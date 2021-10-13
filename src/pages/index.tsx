import type { NextPage } from 'next';
import Head from 'next/head';

import Header from 'src/components/Header';
import { Posts } from 'src/components/Posts';

import styles from 'src/styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Posts />
    </div>
  );
};

export default Home;
