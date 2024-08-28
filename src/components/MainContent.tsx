import useTitles from "@/hooks/useTitle";
import TodoList from "./TodoList";
import Contador from "./Contador";
import TodoReducer from "./TodoReducer";

function MainContent() {
  console.log("Main Content");

  const { todosTitle } = useTitles();
  return (
    <>
      <div>
        <h2>{todosTitle}</h2>
        <TodoList />
      </div>
      <div>
        <h2> === CONTADOR === </h2>
        <Contador />
      </div>
      <div>
        <h2> === TODO + REDUCER === </h2>
        <TodoReducer />
      </div>
    </>
  );
}

export default MainContent;
