import { useState } from "react";

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
    <main className="h-screen my-8 flex gap-8">
      <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your projects</h2>
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">Add Project</button>
        <ul className="mt-8">{projects.length > 0 && projects.map((project, index) => <li key={index}>{project.title}</li>)}</ul>
      </aside>
    </main>
  );
}

export default App;
