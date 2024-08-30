import { ReactNode, useState } from "react";

import { Todo } from "@/types";
import TodosContext from "@/todos/TodosContext";

type Props = {
  children: ReactNode;
};

function TodosProvider({ children }: Props) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 0, name: "Cocinar", completed: false },
    { id: 1, name: "Barrer", completed: false },
    { id: 2, name: "Bañarse", completed: false },
    { id: 3, name: "Trapear", completed: false },
    { id: 4, name: "Lavar", completed: false },
  ]);

  function addTodo(todo: Todo) {
    setTodos([todo, ...todos]);
  }

  return (
    <TodosContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodosContext.Provider>
  );
}

export default TodosProvider;
