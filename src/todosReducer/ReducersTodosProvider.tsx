import ReducersTodosContext from "@/todosReducer/ReducersTodosContext";
import { ReactNode, useReducer } from "react";

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

const todosReducer = (todos: Todo[], action: TodoAction) => {
  switch (action.type) {
    case "ADD":
      return [action.todo, ...todos];

    case "DELETE":
      return todos.filter((t) => t.id !== action.todoID);
  }
  return todos;
};


type Props = {
  children: ReactNode;
};

export default function ReducersTodosProvider({ children }: Props) {
  const [todos, dispatch] = useReducer(todosReducer, []);

  return (
    <ReducersTodosContext.Provider value={{ todos, dispatch }}>
      {children}
    </ReducersTodosContext.Provider>
  );
}