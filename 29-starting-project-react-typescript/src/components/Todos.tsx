import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

export default function Todos({ items, onRemoveTodo }: { items: Todo[]; onRemoveTodo: (id: string) => void }) {
  return (
    <ul className={classes.todos}>
      {items.map(item => (
        <TodoItem key={item.id} id={item.id} text={item.text} onRemoveTodo={() => onRemoveTodo(item.id)} />
      ))}
    </ul>
  );
}
