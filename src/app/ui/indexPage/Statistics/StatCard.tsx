import { FC } from 'react';
import cn from 'classnames';

export interface Props {
  type: 'available' | 'planned' | 'used';
  count: number;
}

export const StatCard: FC<Props> = ({ type, count }) => {
  const colorStyle = type === 'available' ? "before:bg-lightGreen" : type === 'planned' ? "before:bg-lightYellow" : "before:bg-lightRed"
  const renderText = type === 'available' ? 'Доступно сейчас' : type === 'planned' ? 'Запланировано' : 'Использовано/недоступно';
  return (
    <div className='flex justify-between px-[10px] py-[12px] border-[1px] border-borderGray rounded-[16px] mb-[8px] last:mb-0'>
      <p className={cn("relative font-normal leading-[24px] before:mb-[2px] before:mr-[9px] before:w-[6px] before:bottom-[50px] before:h-[6px] before:rounded-[6px] before:content-[''] before:inline-block", colorStyle)}>{renderText}</p>
      <p className='font-normal leading-[24px] whitespace-nowrap'>{count} дня</p>
    </div>
  );
};
