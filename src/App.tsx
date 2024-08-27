import { useState } from "react";

import { Todo } from "./types";
import TodosContext from "./contexts/TodosContext";

import Dashboard from "./components/Dashboard";
import MainContent from "./components/MainContent";

import "./App.css";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 0, name: "Roger", completed: false },
    { id: 1, name: "Mario", completed: false },
    { id: 2, name: "Carlos", completed: false },
  ]);

  function addTodo(todo: Todo) {
    setTodos([todo, ...todos]);
  }

  return (
    <TodosContext.Provider value={{ todos, addTodo }}>
      <Dashboard />
      <MainContent />
    </TodosContext.Provider>
  );
}

export default App;
