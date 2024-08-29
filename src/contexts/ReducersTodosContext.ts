import { createContext, Dispatch } from "react";
import { Todo, TodoAction } from "@/reducers/todosReducer";

type TodosRedContextType = {
    todos: Todo[]
    dispatch: Dispatch<TodoAction>
}

export default createContext<TodosRedContextType>({} as TodosRedContextType)