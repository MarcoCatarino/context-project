import { ReducersTodosProvider } from "@/todosReducer";
import TodoContent from "./TodoContent";

export default function TodoReducer() {
  return (
    <ReducersTodosProvider>
      <TodoContent />
    </ReducersTodosProvider>
  );
}
