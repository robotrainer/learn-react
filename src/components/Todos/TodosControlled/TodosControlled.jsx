import React, { useState, useEffect } from "react";

import classes from "./TodosControlled.module.scss";

import { Button } from "../../shared/Button/Button";
import { TodosList } from "../TodosList/TodosList";

import useTodos from "../hooks/useTodos";

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
  const [todo, setTodo] = useState("");

  const [filterMode, setFilterMode] = useState("all");

  const filteredTodos = filterTodos(filterMode);

  function filterTodos(mode) {
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

      <div className={classes.filter}>
        <label className={classes.inputRadio} htmlFor="all">
          <input
            id="all"
            className={classes.radio}
            type="radio"
            name="filter"
            value="all"
            checked={filterMode == "all"}
            onChange={(e) => setFilterMode(e.target.value)}
          />{" "}
          Все
        </label>
        <label className={classes.inputRadio} htmlFor="completed">
          <input
            id="completed"
            className={classes.radio}
            type="radio"
            name="filter"
            value="completed"
            checked={filterMode == "completed"}
            onChange={(e) => setFilterMode(e.target.value)}
          />{" "}
          Завершённые
        </label>
        <label className={classes.inputRadio} htmlFor="uncompleted">
          <input
            id="uncompleted"
            className={classes.radio}
            type="radio"
            name="filter"
            value="uncompleted"
            checked={filterMode == "uncompleted"}
            onChange={(e) => setFilterMode(e.target.value)}
          />{" "}
          Незавершённые
        </label>
      </div>

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
