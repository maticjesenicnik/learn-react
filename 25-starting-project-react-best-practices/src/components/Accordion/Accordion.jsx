import { createContext, useContext, useState } from "react";
import AccordionContent from "./AccordionContent";
import AccordionItem from "./AccordionItem";
import AccordionTitle from "./AccordionTitle";

const AccordionContext = createContext();

export function useAccordionContext() {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error("Accordion-related components must be wrapped by <Accordion>.");
  }

  return context;
}

export default function Accordion({ children, className }) {
  const [openItemId, setOpenItemId] = useState();

  const toggleItem = id => {
    setOpenItemId(prevId => (prevId === id ? null : id));
  };

  const contextValue = {
    openItemId,
    toggleItem,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;
