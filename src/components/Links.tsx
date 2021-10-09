import styles from '../styles/Home.module.css';

const items = [
  {
    href: 'https://nextjs.org/docs',
    title: 'Documentation ⇨',
    description: 'Find in-depth information about Next.js features and API.',
  },
  {
    href: 'https://nextjs.org/learn',
    title: 'Learn ⇨',
    description: 'Find in-depth information about Next.js features and API.',
  },
  {
    href: 'https://github.com/vercel/next.js/tree/master/examples',
    title: 'Examples ⇨',
    description: 'Discover and deploy boilerplate example Next.js projects.',
  },
  {
    href: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
    title: 'Deploy ⇨',
    description:
      'Instantly deploy your Next.js site to a public URL with Vercel.',
  },
];

const Links = () => {
  return (
    <div className={styles.grid}>
      {items.map((item) => {
        return (
          <a key={item.href} href={item.href} className={styles.card}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </a>
        );
      })}
    </div>
  );
};

export default Links;
