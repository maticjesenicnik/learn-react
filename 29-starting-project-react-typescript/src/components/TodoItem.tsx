import classes from "./TodoItem.module.css";

export default function TodoItem({ text, onRemoveTodo }: { id: string; text: string; onRemoveTodo: () => void }) {
  return (
    <li className={classes.item} onClick={onRemoveTodo}>
      {text}
    </li>
  );
}
