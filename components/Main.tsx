import HeadLine from './HeadLine';
import Links from './Links';

import styles from '../styles/Home.module.css';

type Props = {
  page: string;
};

const Main = (props: Props) => {
  const { page } = props;

  return (
    <main className={styles.main}>
      <HeadLine page={page}>
        <code className={styles.code}>{`pages/${page}.js`}</code>
      </HeadLine>

      <Links />
    </main>
  );
};

export default Main;
