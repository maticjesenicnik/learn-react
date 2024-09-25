import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState();

  const handleTaskChange = event => {
    setEnteredTask(event.target.value);
  };

  const handleClick = () => {
    onAdd(enteredTask);
    setEnteredTask("");
  };

  return (
    <div className="flex items-center gap-4">
      <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={handleTaskChange} value={enteredTask} />
      <button className="text-color-700 hover:text-color-950" onClick={handleClick}>
        Add task
      </button>
    </div>
  );
}
