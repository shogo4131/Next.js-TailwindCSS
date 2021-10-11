import type { NextPage } from 'next';
import Head from 'next/head';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Main from 'src/components/Main';
import { useCounter } from 'src/hooks/useCounter';

import styles from 'src/styles/Home.module.css';

const Home: NextPage = () => {
  const { state, clickAddCounter, clickDescriptionCounter } = useCounter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Main page="index" />
      {state}
      <button onClick={clickAddCounter}>+</button>
      <button onClick={clickDescriptionCounter}>-</button>
      <Footer />
    </div>
  );
};

export default Home;
