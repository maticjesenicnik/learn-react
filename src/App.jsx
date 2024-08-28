import reactEssentialsImage from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[getRandomInt(reactDescriptions.length - 1)];

  return (
    <header>
      <img src={reactEssentialsImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>{description} React concepts you will need for almost any app you are going to build!</p>
    </header>
  );
}

function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept, index) => (
              <CoreConcept key={index} {...concept} />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
