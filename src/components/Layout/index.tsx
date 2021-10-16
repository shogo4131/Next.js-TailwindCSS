import styles from './Layout.module.css';

export const Layout = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};
