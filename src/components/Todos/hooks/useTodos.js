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

  const addTodo = (todo) => {
    if (todo) {
      setTodos((todos) => [...todos, { id: Date.now(), text: todo }]);
    }
  };

  const cleanTodos = () => {
    setTodos([]);
  };

  return {
    todos,
    addTodo,
    cleanTodos,
    isLoading,
    isError: error != null,
    error,
  };
}
