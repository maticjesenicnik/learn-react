import classes from "./TodoItem.module.css";

export default function TodoItem({ text }: { text: string }) {
  return <li className={classes.item}>{text}</li>;
}
