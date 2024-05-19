import { useContext } from "react";

import { ThemeContext, themeData } from "../../context/ThemeContext";

import { Button } from "../shared/Button/Button";

export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme =
      theme === themeData.LIGHT ? themeData.DARK : themeData.LIGHT;
    setTheme(newTheme);
  };

  return (
    <header>
      <h1>TODOS</h1>
      <Button onClick={toggleTheme}>Изменить тему</Button>
    </header>
  );
};
