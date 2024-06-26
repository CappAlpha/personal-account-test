import cn from 'classnames';
import { FC, useEffect, useMemo, useState } from 'react';

export interface Tab {
  name: string;
  slug: string;
  isSelected: boolean;
}

export interface Props {
  tabs: Tab[];
  onChange: (value: string) => void;
}

export const Tabs: FC<Props> = ({ tabs, onChange }) => {
  const currentActiveTab = useMemo(
    () => tabs.find(({ isSelected }) => isSelected),
    [tabs]
  );

  useEffect(() => {
    setActiveTab(currentActiveTab);
  }, [tabs]);

  const [activeTab, setActiveTab] = useState(currentActiveTab);

  const onClickTab = (tab: Tab) => {
    onChange(tab.slug);
    setActiveTab(tab);
  };

  return (
    <div className='relative w-fit  before:absolute before:bottom-0 before:h-[1px] before:w-[100%] before:bg-borderGray'>
      {tabs.map((item) => (
        <button
          key={item.slug}
          className={cn('relative px-[16px] py-[10px] text-[14px] font-semibold leading-[20px] text-lightGray uppercase',activeTab?.slug === item.slug && 'text-whitePrimary before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-[100%] before:bg-borderBlue')}
          disabled={activeTab?.slug === item.slug}
          onClick={() => onClickTab(item)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};
