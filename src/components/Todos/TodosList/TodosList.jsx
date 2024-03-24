import React from "react";

import classes from "./TodosList.module.scss";

export const TodosList = ({
  style,
  className,
  todos,
  isLoading,
  isError,
  error,
}) => {
  if (isLoading) return <h1>Loading...</h1>;

  if (isError)
    return (
      <p>
        {error.name} {error.message}
      </p>
    );

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
