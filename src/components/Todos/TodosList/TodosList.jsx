import React from "react";

import classes from "./TodosList.module.scss";

export const TodosList = ({ style, className, todos }) => {
  return (
    <ol
      style={{ ...style }}
      className={[classes.todosList, className].filter((e) => e).join(" ")}
    >
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ol>
  );
};
