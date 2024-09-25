import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  return (
    <main className="h-screen mt-8 flex gap-8">
      <Sidebar />
      <NoProjectSelected />
    </main>
  );
}

export default App;
