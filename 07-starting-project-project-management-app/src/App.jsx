import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";

function App() {
  const [projects, setProjects] = useState([
    {
      title: "Learning React",
      description: "Learn React from the group up. \n\n Start with the basics, finish with advanced knowledge",
      tasks: [],
    },
    {
      title: "Mastering React",
      description: "Master it while doing applications. \n\n Enhance your knowledge with doing your own projects",
      tasks: [],
    },
  ]);

  return (
    <main className="h-screen mt-8 flex gap-8">
      <Sidebar projects={projects} />
      <NewProject />
    </main>
  );
}

export default App;
