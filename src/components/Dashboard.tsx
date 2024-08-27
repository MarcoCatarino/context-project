import useTodos from "@/hooks/useTodos";

function Dashboard() {
  const {todos} = useTodos();
  return (
    <div>
      {todos.length}
    </div>
  )
}

export default Dashboard