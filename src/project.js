const project = () => {
  const todoList = [];

  const getTodoList = () => todoList.slice();

  const addTodoItem = (todoItem) => {
    todoList.push(todoItem);
  };

  const removeTodoItem = (index) => {
    todoList.splice(index, 1);
  };

  return { getTodoList, addTodoItem, removeTodoItem };
};

export default project;
