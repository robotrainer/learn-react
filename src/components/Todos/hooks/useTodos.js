import { useEffect, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "get_todos": {
      return {
        todos: action.todos,
        isLoading: false,
        error: null,
      };
    }

    case "added_todo": {
      return {
        todos: [...state.todos, action.todo],
        isLoading: false,
        error: null,
      };
    }

    case "changed_status": {
      return {
        todos: state.todos.map((elem) => {
          return elem.id === action.todoId
            ? { ...elem, completed: !elem.completed }
            : elem;
        }),
        isLoading: false,
        error: null,
      };
    }

    case "error": {
      return {
        todos: [],
        isLoading: false,
        error: action.error,
      };
    }
  }

  throw Error(`Unknown action: ${action.type}`);
}

const initState = {
  todos: [],
  isLoading: true,
  error: null,
};

export default function useTodos() {
  const [data, dispatch] = useReducer(reducer, initState);

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
      dispatch({
        type: "get_todos",
        todos: todosData,
      });
    } catch (error) {
      console.error(error);
      dispatch({ type: "error", error });
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
      dispatch({ type: "added_todo", todo: data });
    } catch (error) {
      console.error(error);
      dispatch({ type: "error", error });
    }
  };

  const cleanTodos = async () => {
    dispatch({ type: "get_todos", todos: [] });
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
      dispatch({
        type: "changed_status",
        todoId: data.id,
      });
    } catch (error) {
      console.error(error);
      dispatch({ type: "error", error });
    }
  };

  return {
    todos: data.todos,
    isLoading: data.isLoading,
    error: data.error,
    addTodo,
    cleanTodos,
    changeStatusTodo,
    isError: data.error != null,
  };
}
