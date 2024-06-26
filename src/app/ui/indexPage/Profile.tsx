import Image from 'next/image';
import { FC } from 'react';

export const Profile: FC = () => {
  return (
    <section className='flex justify-between py-[24px] max-[768px]:px-[16px]'>
      <div className='flex gap-[48px]'>
          <Image src='/mockImg/avatar.png' alt='Avatar' width={160} height={160} />
      </div>
    </section>
  );
};
