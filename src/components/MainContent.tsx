import useTitles from "@/hooks/useTitle";
import TodoList from "./TodoList";
import Contador from "./Contador";

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
        <h2> === Contador === </h2>
        <Contador />
      </div>
    </>
  );
}

export default MainContent;
