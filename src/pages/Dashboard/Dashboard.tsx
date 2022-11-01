import { useEffect } from 'react';

import { todoAPI } from '../../api/api';
import { Chart } from '../../components/Chart/Chart';
import { TodoTable } from '../../components/TodoTable/TodoTable';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { getTodoData } from '../../store/todoSlice';

import styled from './Dashboard.module.scss';

const Dashboard = () => {
  const dispatch = useAppDispatch();

  // get todo list data
  useEffect(() => {
    todoAPI
      .getTodoData()
      .then((res) => {
        dispatch(getTodoData(res));
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styled.container}>
      <TodoTable />
      <Chart />
    </div>
  );
};

export { Dashboard };
