import React, { useState, useEffect } from "react";

import classes from "./TodosControlled.module.scss";

import FilterTodo from "../FilterTodo/FilterTodo";
import { TodosList } from "../TodosList/TodosList";
import { Button } from "../../shared/Button/Button";

import useTodos from "../hooks/useTodos";
import useFilterTodos from "../hooks/useFilterTodos";

const filterConfig = [
  {
    value: "all",
    label: "Все",
  },
  {
    value: "completed",
    label: "Завершённые",
  },
  {
    value: "uncompleted",
    label: "Незавершённые",
  },
];

export const TodosControlled = () => {
  const {
    todos,
    addTodo,
    cleanTodos,
    changeStatusTodo,
    isLoading,
    isError,
    error,
  } = useTodos();

  const { filteredTodos, filterMode, setFilterMode } = useFilterTodos(todos);

  const [todo, setTodo] = useState("");

  return (
    <div className={classes.todos}>
      <h1>CONTROLLED</h1>
      <div className={classes.inputTodo}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button
          onClick={() => {
            addTodo(todo);
            setTodo("");
          }}
        >
          Создать
        </Button>
      </div>

      <FilterTodo>
        {filterConfig.map((radio) => {
          return (
            <FilterTodo.Radio
              key={radio.value}
              value={radio.value}
              label={radio.label}
              checked={filterMode === radio.value}
              onChange={(e) => setFilterMode(e.target.value)}
            />
          );
        })}
      </FilterTodo>

      <TodosList
        className={classes.todosList}
        todos={filteredTodos}
        isLoading={isLoading}
        isError={isError}
        error={error}
        onClickTodo={changeStatusTodo}
      />

      {Boolean(todos.length) && (
        <Button className={classes.cleanTodosBtn} onClick={cleanTodos}>
          Очистить
        </Button>
      )}
    </div>
  );
};
