import useTitles from "@/hooks/useTitle"
import TodoList from "./TodoList"


function MainContent() {
  console.log('Main Content')

  const { todosTitle } = useTitles();
  return (
    <div>
      <h2>{todosTitle}</h2>
        <TodoList />
    </div>
  )
}

export default MainContent