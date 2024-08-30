import useTodos from "@/todos/useTodos";

function TodoList() {
  console.log("Todo List");
  const { todos, addTodo } = useTodos();

  return (
    <>
      <button
        onClick={() =>
          addTodo({
            id: Math.random(),
            name: "Elemento Random",
            completed: false,
          })
        }
      >
        Agregar
      </button>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>{t.name}</li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
