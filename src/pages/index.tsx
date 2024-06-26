import type { NextPage } from 'next';

import { AccountPage } from '@/app/feature/AccountPage';
import { ReactElement } from 'react';
import { MainLayout } from '@/app/ui/MainLayout';

const Home: NextPage = () => {
  return <AccountPage />;
};

//@ts-ignore
Home.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default Home;
