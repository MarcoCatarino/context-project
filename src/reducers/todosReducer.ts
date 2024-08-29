export type Todo = {
  id?: number;
  name?: string;
  description?: string;
};

type AddAction = {
  type: "ADD";
  todo: Todo;
};

type DeleteAction = {
  type: "DELETE";
  todoID?: number;
};

export type TodoAction = AddAction | DeleteAction;

export default (todos: Todo[], action: TodoAction) => {
  switch (action.type) {
    case "ADD":
      return [action.todo, ...todos];

    case "DELETE":
      return todos.filter((t) => t.id !== action.todoID);
  }
  return todos;
};
