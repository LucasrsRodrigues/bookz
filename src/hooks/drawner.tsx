import { ReactNode, createContext } from "react";

interface IDrawnerProviderProps {
  children: ReactNode;
}

interface IDrawnerContextData {}

const DrawnerContext = createContext({} as IDrawnerContextData);

function DrawnerProvider({ children }: IDrawnerProviderProps) {}
