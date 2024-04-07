import { useState, useEffect } from "react";

export default function useTodos() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:3001/todos");
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const todosData = await response.json();

      setTodos(todosData);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const addTodo = async (todo) => {
    try {
      const todoObj = { id: JSON.stringify(Date.now()), text: todo };
      const response = await fetch("http://localhost:3001/todos", {
        method: "POST",
        body: JSON.stringify(todoObj),
      });
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setTodos((todos) => [...todos, data]);
    } catch (error) {
      console.error(error);
      // setError(error);
    }
  };

  const cleanTodos = async () => {
    setTodos([]);
  };

  const changeStatusTodo = async (todo) => {
    try {
      const changedStatus = { completed: !todo.completed };
      const response = await fetch(`http://localhost:3001/todos/${todo.id}`, {
        method: "PATCH",
        body: JSON.stringify(changedStatus),
      });
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setTodos((todos) =>
        todos.map((elem) => {
          return elem.id == data.id ? data : elem;
        })
      );
    } catch (error) {
      console.error(error);
      // setError(error);
    }
  };

  return {
    todos,
    addTodo,
    cleanTodos,
    changeStatusTodo,
    isLoading,
    isError: error != null,
    error,
  };
}
