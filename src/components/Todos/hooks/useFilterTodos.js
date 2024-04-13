import { useState } from "react";

export default function useFilterTodos(todos) {
  const [filterMode, setFilterMode] = useState("all");

  const filteredTodos = filterTodos();

  function filterTodos() {
    switch (filterMode) {
      case "completed": {
        return todos.filter((elem) => elem.completed);
      }
      case "uncompleted":
        return todos.filter((elem) => !elem.completed);
      default:
        return todos;
    }
  }

  return {
    filteredTodos,
    filterMode,
    setFilterMode,
  };
}
