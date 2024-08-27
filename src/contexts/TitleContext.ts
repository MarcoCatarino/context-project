import { createContext } from "react";

type TitleContextType = {
    todosTitle: string;
}

export default createContext<TitleContextType>({} as TitleContextType)