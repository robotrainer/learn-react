import React, { useRef, useState } from "react";

import classes from "./TodosUncontrolled.module.scss";

import { Button } from "../../shared/Button/Button";
import { TodosList } from "../TodosList/TodosList";

const todosData = [
  {
    id: 1,
    text: "дело 1",
  },
  {
    id: 2,
    text: "дело 2",
  },
  {
    id: 3,
    text: "дело 3",
  },
];

export const TodosUncontrolled = () => {
  const [todos, setTodos] = useState(todosData);
  const inputRef = useRef();

  const handleTodos = () => {
    const text = inputRef.current.value;

    if (text) {
      setTodos((todos) => [...todos, { id: Date.now(), text }]);

      inputRef.current.value = "";
    }
  };

  const cleanTodos = () => {
    setTodos([]);
  };

  return (
    <div className={classes.todos}>
      <h1>UNCONTROLLED</h1>
      <div className={classes.inputTodo}>
        <input type="text" ref={inputRef} />
        <Button type="button" onClick={handleTodos}>
          Создать
        </Button>
      </div>

      <TodosList className={classes.todosList} todos={todos} />

      {Boolean(todos.length) && (
        <Button
          className={classes.cleanTodosBtn}
          type="button"
          onClick={cleanTodos}
        >
          Очистить
        </Button>
      )}
    </div>
  );
};
