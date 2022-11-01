import { useEffect, useState } from 'react';

import { createStatusClass, statusClasses } from '../../../../utils/createStatusClass';
import { getPercent } from '../../../../utils/getPercent';
import { EmptyCircle } from '../../../ProgressBar/EmptyCircle/EmptyCircle';
import { ProgressBar } from '../../../ProgressBar/ProgressBar';

import styled from './Graph.module.scss';

interface IProps {
  card: string;
  amount: number;
  total: number;
}

const Graph: React.FC<IProps> = ({ card, amount, total }) => {
  const [currentClass, setCurrentClass] = useState<string>('');

  useEffect(() => {
    setCurrentClass(createStatusClass(card, statusClasses));
  }, [card]);

  return (
    <div className={styled.container}>
      <div className={styled.progressBar}>
        <ProgressBar
          percent={getPercent(amount, total)}
          card={card}
          currentClass={currentClass}
        />
      </div>
      <div className={styled.circle}>
        <EmptyCircle currentClass={currentClass} />
      </div>
      <div className={styled.statistic}>
        {amount}/{total}
      </div>
      <p className={styled.status}>{card}</p>
    </div>
  );
};

export { Graph };
