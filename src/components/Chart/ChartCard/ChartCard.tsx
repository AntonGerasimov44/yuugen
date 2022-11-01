import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Graph } from './Graph/Graph';
import { ICardInfo } from '../Chart';
import { dateFormatting } from '../../../utils/dateFormatting';
import '../../../utils/i18next';

import styled from './ChartCard.module.scss';

const ChartCard: React.FC<ICardInfo> = (card) => {
  const [statuses, setStatuses] = useState<string[]>([]);
  const [amounts, setAmounts] = useState<number[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    setStatuses(Object.keys(card.statuses));
    setAmounts(Object.values(card.statuses));
  }, [card]);

  return (
    <article className={styled.container}>
      <div>
        <div className={styled.denotation}>
          <h3>{t('dashboard.publishReport.itDepartment')}</h3>
          <h4>{card.title}</h4>
        </div>
        <div className={styled.graphWrapper}>
          {statuses.map((el, index: number) => {
            return (
              <Graph key={el} card={el} total={card.amount} amount={amounts[index]} />
            );
          })}
        </div>
      </div>

      <div>
        <p className={styled.latestDateTitle}>
          {t('dashboard.publishReport.latestDate')}
        </p>
        <p className={styled.latestDate}>{dateFormatting(card.createdAt)}</p>
      </div>
    </article>
  );
};

export { ChartCard };
