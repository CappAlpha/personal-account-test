import { Info } from '@/shared/components/Icon';
import { FC } from 'react';

import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Props as Card, StatCard } from './StatCard';
import { pluralize } from '@/shared/utils/pluralize';

const MAX_DAYS = 44;

export interface Props {
  statCards: Card[];
}

export const Statistics: FC<Props> = ({ statCards }) => {
  let pluralizeDay = pluralize('день', 'дня', 'дней');
  return (
    <section className='bg-darkGray w-[calc(35.6%-16px)] p-[30px] rounded-[12px] max-[768px]:w-full'>
      <div className='flex gap-[9px] mb-[16px]'>
        <h5 className='text-[24px] font-normal leading-[32px] max-[768px]:text-[16px] max-[768px]:leading-[24px]'>Статистика</h5>
        <Info className='my-auto' />
      </div>
      <div className='w-[160px] mx-auto mb-[16px]'>
        {/* TODO: сделать вывод из массива с помощью фильтра по типам */}
        <CircularProgressbarWithChildren
          value={MAX_DAYS - statCards[1].count}
          minValue={0}
          maxValue={MAX_DAYS}
          styles={buildStyles({
            pathColor: "rgb(219, 69, 70)",
            trailColor: "rgb(255, 182, 73)",
            strokeLinecap: "butt",
          })}
        >
          <CircularProgressbar
            value={statCards[0].count}
            minValue={0}
            maxValue={MAX_DAYS}
            styles={buildStyles({
              pathColor: "rgb(37, 130, 79)",
              trailColor: "transparent",
              strokeLinecap: "butt",
            })}
          />
          <div className='absolute'>
            <p className='text-[34px] font-normal leading-[36px]'>{statCards[0].count}</p>
            <p className='text-mediumGray text-[14px] leading-[24px] text-center font-medium'>{pluralizeDay(statCards[0].count)}</p>
          </div>
        </CircularProgressbarWithChildren>
      </div>
      {statCards.map(({ type, count }) => (
        <StatCard key={type} type={type} count={count} />
      ))}
    </section>
  );
};
