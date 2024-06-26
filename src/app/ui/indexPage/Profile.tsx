import Image from 'next/image';
import { FC } from 'react';

export const Profile: FC = () => {
  return (
    <section className='max-[768px]:px-[16px]'>
      <div className='flex gap-[48px] mb-[52px]'>
        <Image src='/mockImg/avatar.png' alt='Avatar' width={160} height={160} className='max-h-[160px]' />
        <div>
          <h1 className='text-[48px] leading-[56px] font-bold mb-[32px]'>Иванов <br /> Иван Иванович</h1>
          <p className='text-[16px] leading-[24px] font-normal mb-[16px]'>Junior UI/UX designer</p>
          <div className='flex gap-[8px]'>
            <p className='text-[16px] leading-[24px] font-normal'>Россия, Красноярск</p>
            <div className='after:' />
            <p className='text-[16px] leading-[24px] font-normal text-mediumGray'>14:03</p>
          </div>
        </div>
      </div>
      <div>
        <button className='uppercase'>основная информация</button>
      </div>
    </section>
  );
};
