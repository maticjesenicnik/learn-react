import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onSave, onCancel }) {
  const titleInput = useRef();
  const descriptionInput = useRef();
  const dueDateInput = useRef();
  const modal = useRef();

  const handleSave = () => {
    const title = titleInput.current.value;
    const description = descriptionInput.current.value;
    const dueDate = dueDateInput.current.value;

    if (title.trim() === "" || description.trim() === "" || dueDate.trim() === "") {
      modal.current.open();
      return;
    }

    onSave({ title, description, dueDate });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid input</h2>
        <p className="text-stone-600 mb-4">Oops ... Looks like you forgot to enter a value.</p>
        <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>
              Cancel
            </button>
          </li>
          <li>
            <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={titleInput} label="Title" />
          <Input ref={descriptionInput} label="Description" textarea />
          <Input type="date" ref={dueDateInput} label="Due Date" />
        </div>
      </div>
    </>
  );
}
