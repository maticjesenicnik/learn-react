import { createContext, useState } from "react";
import { Todo } from "../types/todo";

type TodoContext = {
  items: Todo[];
  addTodo: (id: string, text: string) => void;
  removeTodo: (id: string) => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const TodosContext = createContext<TodoContext>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
});

export default function TodosContextProvider({ children }: { children: React.ReactElement }) {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodo = (id: string, text: string) => {
    setTodos(prev => {
      const newTodo: Todo = {
        id,
        text,
      };
      return [...prev, newTodo];
    });
  };

  const onRemoveTodo = (id: string) => {
    setTodos(prev => {
      return prev.filter(todo => todo.id !== id);
    });
  };

  const contextValue: TodoContext = {
    items: todos,
    addTodo: onAddTodo,
    removeTodo: onRemoveTodo,
  };

  return <TodosContext.Provider value={contextValue}>{children}</TodosContext.Provider>;
}
