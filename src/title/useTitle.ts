import { useContext } from "react";
import TitleContext from "./TitleContext";

export default function useTitles() {
    return useContext(TitleContext);
}