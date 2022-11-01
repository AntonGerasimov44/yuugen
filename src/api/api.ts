import axios from 'axios';

const instance = axios.create({
  baseURL: `http://188.166.76.128:8888/api/task/`,
});

const todoAPI = {
  async getTodoData() {
    const res = await instance.post(`getAll`);
    return res.data;
  },

  async postTodoData(title: string, status: string, text: string) {
    const res = await instance.post(`save`, { title, status, text });
    return res.data;
  },
};

export { todoAPI };
