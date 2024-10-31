import { useContext, useRef } from "react";

import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

export default function NewTodo() {
  const { addTodo } = useContext(TodosContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = inputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    addTodo(crypto.randomUUID(), enteredText);
    inputRef.current!.value = "";
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
}
