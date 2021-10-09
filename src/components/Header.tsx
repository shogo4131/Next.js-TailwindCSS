import Link from 'next/Link';

import styles from 'src/styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <Link href="/">
        <a className={styles.anchor}>Index</a>
      </Link>
      <Link href="/about">
        <a className={styles.anchor}>About</a>
      </Link>
    </header>
  );
};

export default Header;
