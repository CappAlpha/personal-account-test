import { Burger, ChevronDown, Logo } from '@/shared/components/Icon';
import Image from 'next/image';
import { FC } from 'react';

export const Header: FC = () => {
  return (
    <header className='flex justify-between py-[24px] max-[768px]:px-[16px]'>
      <Logo className='w-[180px] h-[40px] max-[768px]:w-[135px] max-[768px]:h-[30px]' />
      <div className='flex gap-[8px]'>
        <button className='btnHeader max-[768px]:hidden'>
          СОЗДАТЬ СЧЁТ
        </button>
        <button className='btnHeader max-[768px]:hidden'>
          КОРЗИНА
        </button>
        {/* TODO: вынести потом в отдельный компонент */}
        <div className='flex px-[16px] py-[6px] h-[36px] my-auto rounded-[18px] box-border border-[1px] border-darkGray'>
          <Image src='/mockImg/avatar.png' alt='Avatar' width={24} height={24} />
          <ChevronDown />
        </div>
        {/* TODO: вынести потом в отдельный компонент */}
        <div className='flex justify-center my-auto w-[40px]'>
          <Burger />
        </div>
      </div>
    </header>
  );
};
