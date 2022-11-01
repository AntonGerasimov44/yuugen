import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type todoElementType = {
  id: number;
  title: string;
  status: string;
  createdAt: string;
};

type todoType = {
  todos: todoElementType[];
};

const initialState: todoType = {
  todos: [],
};

const todoData = createSlice({
  name: 'todoData',
  initialState,
  reducers: {
    getTodoData(state, action: PayloadAction<todoElementType[]>) {
      // eslint-disable-next-line array-callback-return
      const correctData = action.payload.filter((el) => {
        if (
          el.status === 'finished' ||
          el.status === 'overdue' ||
          el.status === 'in progress' ||
          el.status === 'draft'
        ) {
          return el;
        }
      });
      state.todos = correctData;
    },
  },
});

export const { getTodoData } = todoData.actions;

export default todoData.reducer;
