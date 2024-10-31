import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

export default function Todos({ items }: { items: Todo[] }) {
  return (
    <ul className={classes.todos}>
      {items.map(item => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
}
