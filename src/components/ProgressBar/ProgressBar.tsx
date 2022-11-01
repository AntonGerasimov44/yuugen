import { useEffect, useRef, useState } from 'react';

import styled from './ProgressBar.module.scss';

interface IProps {
  percent: number;
  card: string;
  currentClass: string;
}

const ProgressBar: React.FC<IProps> = ({ percent, currentClass }) => {
  const [radius, setRadius] = useState<number>(0);
  const [circumference, setCircumference] = useState<number>(0);
  const circleRef = useRef<any>();

  useEffect(() => {
    // writing the circumference of a circle
    setCircumference(Math.PI * radius * 2);
  }, [radius]);

  useEffect(() => {
    // writing the progress bar radius
    setRadius(circleRef.current?.r.baseVal.value);
  }, [circleRef]);

  useEffect(() => {
    if (circleRef.current.style) {
      circleRef.current.style.strokeDasharray = `${circumference} ${circumference}`;
      circleRef.current.style.strokeDashoffset = circumference;
    }
  }, [circumference]);

  useEffect(() => {
    setProgress(percent);
  }, [percent, setProgress]);

  // filling progress bar
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function setProgress(percent: number): void {
    const offset = circumference - (percent / 100) * circumference;
    if (circleRef.current) {
      circleRef.current.style.strokeDashoffset = offset;
    }
  }

  return (
    <div className={styled.container}>
      <svg className={styled.progressRing} width='76' height='76'>
        <circle
          ref={circleRef}
          className={
            currentClass === 'overdue'
              ? styled.overdue
              : currentClass === 'progress'
              ? styled.progress
              : currentClass === 'draft'
              ? styled.draft
              : styled.finished
          }
          strokeWidth='8'
          fill='transparent'
          cx='38'
          cy='38'
          r='34'
        />
      </svg>
    </div>
  );
};

export { ProgressBar };
