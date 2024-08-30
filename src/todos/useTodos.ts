import { useContext } from "react";
import TodosContext from "@/todos/TodosContext";

export default function useTodos() {
  return useContext(TodosContext);
}
