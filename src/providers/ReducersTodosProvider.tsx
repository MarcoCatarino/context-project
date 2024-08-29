import ReducersTodosContext from "@/contexts/ReducersTodosContext";
import todosReducer from "@/reducers/todosReducer";
import { ReactNode, useReducer } from "react";

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
