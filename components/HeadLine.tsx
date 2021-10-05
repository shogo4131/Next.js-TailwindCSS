import { ReactNode } from 'react';

import styles from '../styles/Home.module.css';

type Props = {
  page: string;
  children: ReactNode;
};

const HeadLine = (props: Props) => {
  const { page, children } = props;

  return (
    <>
      <h1 className={styles.title}>{page}</h1>

      <p className={styles.description}>Get started by editing {children}</p>
    </>
  );
};

export default HeadLine;
