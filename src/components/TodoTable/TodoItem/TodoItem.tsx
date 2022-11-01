import { useEffect, useState } from 'react';

import { todoElementType } from '../../../store/todoSlice';
import { dateFormatting } from '../../../utils/dateFormatting';
import { statusClasses, createStatusClass } from '../../../utils/createStatusClass';

import styled from './TodoItem.module.scss';

const TodoItem: React.FC<todoElementType> = ({ status, createdAt, title }) => {
  const [date, setDate] = useState('');
  const [todoStatus, setTodoStatus] = useState('draft');

  useEffect(() => {
    setDate(dateFormatting(createdAt));
  }, [createdAt]);

  useEffect(() => {
    setTodoStatus(createStatusClass(status, statusClasses));
  }, [status]);

  return (
    <li className={styled.container}>
      <div className={styled.title}>{title}</div>
      <div className={styled.statusWrapper}>
        <div
          className={
            todoStatus === 'overdue'
              ? styled.overdue
              : todoStatus === 'progress'
              ? styled.progress
              : todoStatus === 'draft'
              ? styled.draft
              : styled.finished
          }>
          {status}
        </div>
      </div>
      <div className={styled.createdAt}>{date}</div>
    </li>
  );
};

export { TodoItem };
