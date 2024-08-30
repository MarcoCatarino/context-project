import { createContext, Dispatch, useContext } from "react";
import { Todo, TodoAction } from "./ReducersTodosProvider";

type TodosRedContextType = {
  todos: Todo[];
  dispatch: Dispatch<TodoAction>;
};

const ReducersTodosContext = createContext<TodosRedContextType>(
  {} as TodosRedContextType
);

export default ReducersTodosContext;

export function useReducersTodo() {
  return useContext(ReducersTodosContext);
}
