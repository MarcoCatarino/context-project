import ReducersTodosContext from "@/contexts/ReducersTodosContext";
import { useContext } from "react";


export default function useReducersTodo() {
  return useContext(ReducersTodosContext);
}
