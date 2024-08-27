import { useContext } from "react";
import TodosContext from "@/contexts/TodosContext";

function Dashboard() {
  const {todos} = useContext(TodosContext);
  return (
    <div>
      {todos.length}
    </div>
  )
}

export default Dashboard