import { createContext, ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}

type IThemeContext = {
  switchTheme: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<IThemeContext>({
  switchTheme: false,
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: Props) => {
  const [switchTheme, setSwitchTheme] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("currentTheme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    localStorage.setItem("currentTheme", switchTheme ? "dark" : "light");
  }, [switchTheme]);

  const toggleTheme = () => {
    setSwitchTheme((prev: boolean) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ switchTheme, toggleTheme }}>
      <div data-theme={switchTheme ? "dark" : "light"}>{children}</div>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
