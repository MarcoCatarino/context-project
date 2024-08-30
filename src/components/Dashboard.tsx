import useTodos from "@/todos/useTodos";
import useUser from "@/users/useUser";

function Dashboard() {
  console.log("Dashboard");
  const { todos } = useTodos();
  const { user, toggleLogin } = useUser();

  return (
    <>
      <div>{todos.length}</div>
      <br />
      <div>
        {user.name}
        <br />
        <button onClick={() => toggleLogin()}>Login</button>
      </div>
    </>
  );
}

export default Dashboard;
