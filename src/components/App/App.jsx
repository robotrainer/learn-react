import React from "react";
import { TodosUncontrolled } from "../Todos/TodosUncontrolled/TodosUncontrolled";
import { TodosControlled } from "../Todos/TodosControlled/TodosControlled";

export const App = () => {
  return (
    <div className="app">
      <h1>TODOS</h1>
      {/* <TodosUncontrolled /> */}
      <TodosControlled />
    </div>
  );
};
