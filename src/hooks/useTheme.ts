import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const useTheme = () => useContext(ThemeContext);

export default useTheme;
