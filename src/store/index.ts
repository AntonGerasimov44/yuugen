import { configureStore } from '@reduxjs/toolkit';

import todoData from './todoSlice';

const store = configureStore({
  reducer: {
    todos: todoData,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
