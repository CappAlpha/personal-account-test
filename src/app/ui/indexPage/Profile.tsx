import Image from 'next/image';
import { FC } from 'react';
import { Tab, Tabs } from '../uiKit/Tabs';
import { noop } from '@/shared/utils/noop';

const tabs: Tab[] = [
  {
    name: 'основная информация',
    slug: 'info',
    isSelected: false,
  },
  {
    name: 'отпуск',
    slug: 'vacation',
    isSelected: true,
  },
  {
    name: 'оборудование',
    slug: 'equipment',
    isSelected: false,
  },
]

export const Profile: FC = () => {
  return (
    <section className='bg-darkGray px-[40px] pt-[40px] pb-[20px] rounded-[12px] max-[768px]:px-[16px]'>
      <div className='flex gap-[48px] mb-[52px]'>
        <Image src='/mockImg/avatar.png' alt='Avatar' width={160} height={160} className='max-h-[160px]' />
        <div>
          <h1 className='text-[48px] leading-[56px] font-bold mt-[24px] mb-[32px]'>Иванов <br /> Иван Иванович</h1>
          <p className='text-[16px] leading-[24px] font-normal mb-[16px]'>Junior UI/UX designer</p>
          <div className='flex gap-[8px]'>
            <p className='text-[16px] leading-[24px] font-normal'>Россия, Красноярск</p>
            <div className="text-mediumGray after:content-['•']" />
            <p className='text-[16px] leading-[24px] font-normal text-mediumGray'>14:03</p>
          </div>
        </div>
      </div>
      <Tabs tabs={tabs} onChange={noop} />
    </section>
  );
};
