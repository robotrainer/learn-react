import { useMemo, useState } from "react";

export default function useFilterTodos(todos) {
  const [filterMode, setFilterMode] = useState("all");

  const filteredTodos = useMemo(
    () => filterTodos(filterMode, todos),
    [filterMode, todos]
  );

  function filterTodos(mode, todos) {
    switch (mode) {
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
