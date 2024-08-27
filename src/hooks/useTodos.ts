import { useContext } from "react";
import TodosContext from "@/contexts/TodosContext";

export default function useTodos() {
    return useContext(TodosContext);
}