import TodosProvider from "@/todos/TodosProvider";
import UserProvider from "@/users/UserProvider";
import TitlesProvider from "@/title/TitlesProvider";

import { ReactNode } from "react";

type Props = {
    children: ReactNode
}


function Layout({ children }: Props) {
  console.log("Layout");
  return (
    <TodosProvider>
      <UserProvider>
        <TitlesProvider>
        { children }
        </TitlesProvider>
      </UserProvider>
    </TodosProvider>
  );
}

export default Layout;
