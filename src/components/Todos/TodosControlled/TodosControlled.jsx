import React, { useState } from "react";

import classes from "./TodosControlled.module.scss";

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

export const TodosControlled = () => {
  const [todos, setTodos] = useState(todosData);
  const [todo, setTodo] = useState("");

  const handleTodo = (e) => {
    setTodo(e.target.value);
  };

  const handleTodos = () => {
    if (todo) {
      setTodos((todos) => [...todos, { id: Date.now(), text: todo }]);
      setTodo("");
    }
  };

  const cleanTodos = () => {
    setTodos([]);
  };

  return (
    <div className={classes.todos}>
      <h1>CONTROLLED</h1>
      <div className={classes.inputTodo}>
        <input type="text" value={todo} onChange={handleTodo} />
        <Button onClick={handleTodos}>Создать</Button>
      </div>

      <TodosList className={classes.todosList} todos={todos} />

      {Boolean(todos.length) && (
        <Button className={classes.cleanTodosBtn} onClick={cleanTodos}>
          Очистить
        </Button>
      )}
    </div>
  );
};
