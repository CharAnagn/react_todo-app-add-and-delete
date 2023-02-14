import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const getTodos = () => {
  return client.get<Todo[]>('/todos?userId=5997');
};

// Add more methods here

type TodoWithoutId = {
  title: string,
  userId: number,
  completed: boolean
};

export const postTodos = (todo: TodoWithoutId) => {
  return client.post<Todo>('/todos', todo);
};

export const deleteTodo = (todoId: number) => {
  return client.delete(`./todos/${todoId}`);
};