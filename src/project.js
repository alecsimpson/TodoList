const project = (name, description) => {
  const todoList = [];

  const getTodoList = () => todoList.slice();

  const addTodoItem = (todoItem) => {
    todoList.push(todoItem);
  };

  const removeTodoItem = (index) => {
    todoList.splice(index, 1);
  };

  return {
    name, description, getTodoList, addTodoItem, removeTodoItem,
  };
};

export default project;
