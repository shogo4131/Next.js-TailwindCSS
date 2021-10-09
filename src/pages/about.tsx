import type { NextPage } from 'next';
import Head from 'next/head';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Main from 'src/components/Main';

import styles from '../styles/Home.module.css';

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <Main page="about" />

      <Footer />
    </div>
  );
};

export default About;
