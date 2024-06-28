import { Info } from '@/shared/components/Icon';
import { FC } from 'react';

export const Statistics: FC = () => {
  return (
    <section className='bg-darkGray w-[calc(35.6%-16px)] p-[30px] rounded-[12px] max-[768px]:w-full'>
      <div className='flex gap-[9px] mb-[16px]'>
        <h5 className='text-[24px] font-normal leading-[32px]'>Статистика</h5>
        <Info className='my-auto' />
      </div>
    </section>
  );
};
