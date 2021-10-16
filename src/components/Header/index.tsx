import { useMemo } from 'react';
import Link from 'next/Link';

import styles from './Header.module.css';

const Header = () => {
  const navItems = useMemo(() => {
    return [
      { href: '/', label: 'Index' },
      { href: '/posts', label: 'Posts' },
    ];
  }, []);

  return (
    <header className={styles.headerContainer}>
      {navItems.map(({ href, label }) => (
        <Link href={href} key={href}>
          <a className={styles.anchor}>{label}</a>
        </Link>
      ))}
    </header>
  );
};

export default Header;
