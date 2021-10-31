import { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col items-center mx-auto px-2 min-h-screen max-w-2xl">
      {children}
    </div>
  );
};
