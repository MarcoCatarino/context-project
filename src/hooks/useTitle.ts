import { useContext } from "react";
import TitleContext from "@/contexts/TitleContext";

export default function useTitles() {
    return useContext(TitleContext);
}