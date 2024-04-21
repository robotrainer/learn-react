import { useRef } from "react";

import classes from "./TodosUncontrolled.module.scss";

import { Button } from "../../shared/Button/Button";
import { TodosList } from "../TodosList/TodosList";

import useTodos from "../hooks/useTodos";

export const TodosUncontrolled = () => {
  const {
    todos,
    addTodo,
    cleanTodos,
    changeStatusTodo,
    isLoading,
    isError,
    error,
  } = useTodos();
  const inputRef = useRef();

  const handleTodos = () => {
    const text = inputRef.current.value;

    if (text) {
      addTodo(text);
      inputRef.current.value = "";
    }
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

      <TodosList
        className={classes.todosList}
        todos={todos}
        isLoading={isLoading}
        isError={isError}
        error={error}
        onClickTodo={changeStatusTodo}
      />

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
