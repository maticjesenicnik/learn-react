import { useContext, useRef, useState } from "react";

import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

export default function NewTodo() {
  const { addTodo } = useContext(TodosContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>("");

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = inputRef.current!.value;

    if (enteredText.trim().length === 0) {
      setError("Please check your inputs and try again.");
      return;
    }

    addTodo(crypto.randomUUID(), enteredText);
    inputRef.current!.value = "";
    setError("");
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={inputRef} />
      {error && <p className={classes.error}>{error}</p>}
      <button>Add Todo</button>
    </form>
  );
}
