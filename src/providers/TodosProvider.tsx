import { ReactNode, useState } from "react";

import { Todo } from "@/types";
import TodosContext from "@/contexts/TodosContext";

type Props = {
    children: ReactNode
}

function TodosProvider({ children }: Props) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 0, name: "Roger", completed: false },
    { id: 1, name: "Mario", completed: false },
    { id: 2, name: "Carlos", completed: false },
    { id: 2, name: "Fernando", completed: false },
    { id: 2, name: "Natalia", completed: false },
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
