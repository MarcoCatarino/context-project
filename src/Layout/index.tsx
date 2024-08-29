import TodosProvider from "@/providers/TodosProvider";
import UserProvider from "@/providers/UserProvider";
import TitlesProvider from "@/providers/TitlesProvider";

import { ReactNode } from "react";
import "./App.css";

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
