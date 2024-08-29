import ReducersTodosProvider from "@/providers/ReducersTodosProvider";
import TodoContent from "./TodoContent";

export default function TodoReducer() {
  return (
    <ReducersTodosProvider>
      <TodoContent />
    </ReducersTodosProvider>
  );
}
