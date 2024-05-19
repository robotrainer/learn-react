import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";

import { Header } from "../Header/Header";
import { TodosUncontrolled } from "../Todos/TodosUncontrolled/TodosUncontrolled";
import { TodosControlled } from "../Todos/TodosControlled/TodosControlled";

export const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={["app", theme].join(" ")}>
      <Header />
      {/* <TodosUncontrolled /> */}
      <TodosControlled />
    </div>
  );
};
