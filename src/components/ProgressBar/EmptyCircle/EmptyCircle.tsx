import styled from './EmptyCircle.module.scss';

interface IProps {
  currentClass: string;
}

const EmptyCircle: React.FC<IProps> = ({ currentClass }) => {
  return (
    <svg className={styled.container} width='76' height='76'>
      <circle
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
  );
};

export { EmptyCircle };
