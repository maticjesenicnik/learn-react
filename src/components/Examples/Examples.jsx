import { useState } from "react";
import TabButton from "./TabButton/TabButton";
import { EXAMPLES } from "../../data";
import "./Examples.css";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  const handleSelect = (selectedTopic) => {
    setSelectedTopic(selectedTopic);
  };

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => {
            handleSelect("components");
          }}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => {
            handleSelect("jsx");
          }}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => {
            handleSelect("props");
          }}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => {
            handleSelect("state");
          }}
        >
          State
        </TabButton>
      </menu>
      {!selectedTopic && <p>Please select a topic.</p>}
      {selectedTopic && (
        <div id="tab-content">
          <p></p>
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )}
    </section>
  );
}
