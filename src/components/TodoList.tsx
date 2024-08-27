import useTodos from "@/hooks/useTodos";

function TodoList() {
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
