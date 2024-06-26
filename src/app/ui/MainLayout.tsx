import { FC, ReactElement } from 'react';

interface Props {
  children?: ReactElement;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className='min-h-screen'>
      {children}
    </div>
  );
};
