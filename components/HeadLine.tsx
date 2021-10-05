import styles from '../styles/Home.module.css';

type Props = {
  page: string;
};

const HeadLine = (props: Props) => {
  const { page } = props;

  return (
    <>
      <h1 className={styles.title}>{page}</h1>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>{`pages/${page}.js`}</code>
      </p>
    </>
  );
};

export default HeadLine;
