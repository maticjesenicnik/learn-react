import Todos from "./components/Todos";
import { Todo } from "./types/todo";

const TODOS: Todo[] = [
  {
    id: "p1",
    text: "Learn React",
  },
  {
    id: "p2",
    text: "Learn TypeScript",
  },
];

function App() {
  return (
    <div>
      <Todos items={TODOS} />
    </div>
  );
}

export default App;
