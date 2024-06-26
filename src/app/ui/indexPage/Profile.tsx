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
    <section className='bg-darkGray mb-[16px] px-[40px] pt-[40px] pb-[20px] rounded-[12px] max-[768px]:px-[32px] max-[768px]:pt-[32px] max-[768px]:pb-[28px]'>
      <div className='flex w-[100%] gap-[48px] mb-[52px] max-[768px]:flex-col max-[768px]:mb-[24px] max-[768px]:gap-[16px] max-[768px]:justify-center'>
        <Image src='/mockImg/avatar.png' alt='Avatar' width={160} height={160} className='max-h-[160px] max-[768px]:self-center' />
        <div>
          <h1 className='text-[48px] leading-[56px] font-bold mt-[24px] mb-[32px] max-[768px]:text-[24px] max-[768px]:leading-[32px] max-[768px]:mb-[24px] max-[768px]:mt-0 max-[768px]:text-center'>Иванов <br /> Иван Иванович</h1>
          <p className='text-[16px] leading-[24px] font-normal mb-[16px] max-[768px]:mb-[24px] max-[768px]:text-center'>Junior UI/UX designer</p>
          <div className='flex gap-[8px] max-[768px]:justify-center'>
            <p className='text-[16px] leading-[24px] font-normal'>Россия, Красноярск</p>
            <div className="text-mediumGray after:content-['•']" />
            <p className='text-[16px] leading-[24px] font-normal text-mediumGray'>14:03</p>
          </div>
        </div>
      </div>
      <div className='max-[768px]:whitespace-nowrap max-[768px]:overflow-y-auto max-[768px]:mx-[-32px] max-[768px]:px-[16px] max-[768px]:hideScroll'>
        <Tabs tabs={tabs} onChange={noop} />
      </div>
    </section>
  );
};
