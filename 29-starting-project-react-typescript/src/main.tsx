import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import "./index.css";
import TodosContextProvider from "./store/todos-context.tsx";

createRoot(document.getElementById("root")!).render(
  <TodosContextProvider>
    <App />
  </TodosContextProvider>
);
