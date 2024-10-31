import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { Todo } from "./types/todo";

function App() {
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

  return (
    <div>
      <NewTodo onAddTodo={onAddTodo} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
