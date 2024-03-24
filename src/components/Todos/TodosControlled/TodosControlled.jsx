import React, { useState, useEffect } from "react";

import classes from "./TodosControlled.module.scss";

import { Button } from "../../shared/Button/Button";
import { TodosList } from "../TodosList/TodosList";

import useTodos from "../hooks/useTodos";

export const TodosControlled = () => {
  const { todos, addTodo, cleanTodos, isLoading, isError, error } = useTodos();
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

      <TodosList
        className={classes.todosList}
        todos={todos}
        isLoading={isLoading}
        isError={isError}
        error={error}
      />

      {Boolean(todos.length) && (
        <Button className={classes.cleanTodosBtn} onClick={cleanTodos}>
          Очистить
        </Button>
      )}
    </div>
  );
};
