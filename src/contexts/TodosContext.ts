import { createContext } from "react";
import { Todo } from "../types/index";

type TodoContextType = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
};

export default createContext<TodoContextType>({} as TodoContextType);
