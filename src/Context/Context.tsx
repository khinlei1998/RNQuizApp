import { createContext,useContext } from "react";
interface StartScreenProps {
    startGame: () => void;
}
const StartContext = createContext<StartScreenProps|undefined>(undefined);
export const UseStartContext = () => useContext(StartContext);

