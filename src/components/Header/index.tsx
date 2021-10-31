import { useMemo } from 'react';
import Link from 'next/Link';

const Header = () => {
  const navItems = useMemo(() => {
    return [
      { href: '/', label: 'Index' },
      { href: '/posts', label: 'Posts' },
      { href: '/users', label: 'Users' },
      { href: '/comments', label: 'Comments' },
    ];
  }, []);

  return (
    <header className="flex justify-center items-center border-b w-full h-24">
      {navItems.map(({ href, label }) => (
        <Link href={href} key={href}>
          <a className="inline-block py-2 px-6 text-xl hover:text-blue-500 focus:text-blue-500">
            {label}
          </a>
        </Link>
      ))}
    </header>
  );
};

export default Header;
