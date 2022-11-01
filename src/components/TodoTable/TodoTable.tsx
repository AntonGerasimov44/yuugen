import { useTranslation } from 'react-i18next';

import { useAppSelector } from '../../hooks/reduxHooks';
import { TodoItem } from './TodoItem/TodoItem';
import '../../utils/i18next';

import styled from './TodoTable.module.scss';

const TodoTable = () => {
  const todoList = useAppSelector((state) => state.todos.todos);
  const { t } = useTranslation();

  return (
    <div className={styled.container}>
      <article className={styled.titleWrapper}>
        <h3 className={styled.title}>{t('dashboard.myTodos.myTodos')}</h3>
        <div className={styled.amount}>{todoList.length}</div>
      </article>

      <div className={styled.tableWrapper}>
        <article className={styled.listHeaders}>
          <h4 className={styled.invoice}>
            <span>{t('dashboard.myTodos.invoice')}</span>
          </h4>
          <h4 className={styled.status}>
            <span>{t('dashboard.myTodos.status')}</span>
          </h4>
          <h4 className={styled.dueDate}>
            <span>{t('dashboard.myTodos.dueDate')}</span>
          </h4>
        </article>

        <ul className={styled.todosList}>
          {todoList.map((todoItem) => {
            return <TodoItem key={todoItem.id} {...todoItem} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export { TodoTable };
