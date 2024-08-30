import { ReactNode, useState } from "react";
import TitleContext from "./TitleContext";

type Props = {
  children: ReactNode;
};

export default function TitlesProvider({ children }: Props) {
  const [titles] = useState({ todosTitle: "=== TODOS ===" });

  return (
    <TitleContext.Provider value={titles}>
        {children}
    </TitleContext.Provider>
  );
}
