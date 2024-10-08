import useTitles from "@/title/useTitle";
import TodoList from "./TodoList";
import Contador from "./Contador";
import ReducersTodos from "./ReducersTodos";

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
        <ReducersTodos />
      </div>
    </>
  );
}

export default MainContent;
