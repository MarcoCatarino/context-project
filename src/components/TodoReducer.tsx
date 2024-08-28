import { useReducer } from "react";

type Todo = {
  id?: number;
  name?: string;
  description?: string;
};

type AddAction = {
  type: "ADD";
  todo: Todo;
};

type DeleteAction = {
  type: "DELETE";
  todoID?: number;
};

type Action = AddAction | DeleteAction;

const reducer = (todos: Todo[], action: Action) => {
  switch (action.type) {
    case "ADD":
      return [action.todo, ...todos];

    case "DELETE":
      return todos.filter((t) => t.id !== action.todoID);
  }
  return todos;
};

export default function TodoReducer() {
  const [todos, dispatch] = useReducer(reducer, []);
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
