import { useEffect, useState } from 'react';
import { useTransition } from 'react';

import { createCardData, IStatuses } from '../../utils/createCardData';
import { useAppSelector } from '../../hooks/reduxHooks';
import { ChartCard } from './ChartCard/ChartCard';
import '../../utils/i18next';

import styled from './Chart.module.scss';
import { useTranslation } from 'react-i18next';

export interface ICardInfo {
  title: string;
  createdAt: string;
  amount: number;
  statuses: IStatuses;
}

const Chart = () => {
  const [cardInfo, setCardInfo] = useState<ICardInfo[]>([]);
  const todosData = useAppSelector((state) => state.todos.todos);
  const { t } = useTranslation();

  useEffect(() => {
    setCardInfo(createCardData(todosData));
  }, [todosData]);

  return (
    <div className={styled.container}>
      <article className={styled.titleWrapper}>
        <h3 className={styled.title}>{t('dashboard.publishReport.publishReport')}</h3>
        <div className={styled.amount}>{cardInfo.length}</div>
      </article>
      <div className={styled.cardsWrapper}>
        {cardInfo.map((card) => {
          return <ChartCard key={card.title} {...card} />;
        })}
      </div>
    </div>
  );
};

export { Chart };
