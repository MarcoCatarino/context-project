import useReducersTodo from "@/hooks/useReducersTodo";

function TodoContent() {
    const { todos, dispatch } = useReducersTodo();
  return (
    <>
      <button
        onClick={() => {
          const id = Math.random();
          dispatch({
            type: "ADD",
            todo: {
              id,
              name: "Nombre Random",
              description: `ID: ${id}`,
            },
          });
        }}
      >
        AGREGAR
      </button>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            {t.name}
            <br />
            {t.description}
            <br />

            <button
              onClick={() =>
                dispatch({
                  type: "DELETE",
                  todoID: t.id,
                })
              }
            >
              ELIMINAR
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoContent;
