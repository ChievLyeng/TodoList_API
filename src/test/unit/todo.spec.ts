import { describe } from 'node:test';
import {
  createTodo,
  deleteTodo,
  getTodoByTitle,
  updateTodo,
} from '../../controller/todoController';

const mockInput = {
  title: 'Test 1',
  description: 'Desc 1',
  dueDate: 1212,
  completed: false,
};

describe('createTodo', () => {
  // create todo without title
  test('Should Show error message Title is require.', async () => {
    const todo = await createTodo({
      ...mockInput,
      title: '',
    });

    expect(todo.message).toEqual('Title is required.');
  });

  // update todo without todoId input
  test('Should show error message Invalid Todo Id.', async () => {
    const todo = await updateTodo({
      todoId: '',
      data: {},
    });

    expect(todo.message).toEqual('Invalid Todo Id.');
  });

  // delete todo with invalid id
  test('Should show error message Invalid Todo Id.', async () => {
    const todo = await deleteTodo({
      todoId: '',
    });

    expect(todo.message).toEqual('Invalid Todo Id.');
  });

  // get todo by title with invalid input
  test('Should show error message Title is require.', async () => {
    const todo = await getTodoByTitle('');

    expect(todo.message).toEqual('Title is require.');
  });
});
