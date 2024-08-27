import TodoList from "./TodoList"


function MainContent() {
  console.log('Main Content')
  return (
    <div>
      <h2>TODOS</h2>
        <TodoList />
    </div>
  )
}

export default MainContent