import { Header } from '@/app/ui/indexPage/Header';
import { Profile } from '@/app/ui/indexPage/Profile/Profile';
import { Statistics } from '@/app/ui/indexPage/Statistics/Statistics';
import { Vacations } from '@/app/ui/indexPage/Vacations/Vacations';
import { ChevronDown } from '@/shared/components/Icon';
import { FC } from 'react';

import { statCards } from './mocks/statCards';

export const AccountPage: FC = () => {
  return (
    <>
      <Header />
      {/* <button className='flex gap-[8px] px-[16px] py-[8px] text-mediumGray'>
        <ChevronDown className='rotate-90' />
        <p className='self-center text-[14px] leading-[20px] font-semibold uppercase'>вернуться к сотрудникам</p>
      </button> */}
      <Profile />
      <div className='flex gap-[16px] max-[768px]:flex-col'>
        <Statistics statCards={statCards} />
        <Vacations />
      </div>
    </>
  );
};
