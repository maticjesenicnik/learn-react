import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

export default function Todos({ items }: { items: Todo[] }) {
  return (
    <ul>
      {items.map(item => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
}
