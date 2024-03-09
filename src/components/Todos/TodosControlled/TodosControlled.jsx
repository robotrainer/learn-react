import React, { useState, useEffect } from "react";

import classes from "./TodosControlled.module.scss";

import { Button } from "../../shared/Button/Button";
import { TodosList } from "../TodosList/TodosList";

export const TodosControlled = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    try {
      setIsLoading(true);
      const responce = await fetch("http://localhost:3001/todos");
      if (!responce.ok) {
        throw new Error(`${responce.status} ${responce.statusText}`);
      }

      const todosData = await responce.json();

      setTodos(todosData);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

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

      {!isLoading ? (
        <TodosList className={classes.todosList} todos={todos} />
      ) : (
        <h1>Loading...</h1>
      )}

      {Boolean(!todos.length) && !isLoading ? (
        <h2>Todos list are empty</h2>
      ) : null}

      {Boolean(todos.length) && (
        <Button className={classes.cleanTodosBtn} onClick={cleanTodos}>
          Очистить
        </Button>
      )}
    </div>
  );
};
