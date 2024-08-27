import { createContext } from "react";

type UserContextType = {
  user: { name: string };
  toggleLogin: () => void;
};

export default createContext<UserContextType>({} as UserContextType);
