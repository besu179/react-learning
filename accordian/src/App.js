import { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update the view based on changes in data.",
  },
  {
    id: 2,
    question: "What are React components?",
    answer:
      "React components are independent and reusable pieces of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML via the render() function.",
  },
  {
    id: 3,
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension to JavaScript that allows you to write HTML-like structures within your JavaScript code. It gets transformed into regular JavaScript function calls that create React elements.",
  },
  {
    id: 4,
    question: "How do you handle events in React?",
    answer:
      "In React, events are handled using JSX attributes. You attach event handlers (functions) to elements using attributes like onClick, onChange, etc.  These handlers are called when the event occurs.",
  },
  {
    id: 5,
    question: "What are React hooks?",
    answer:
      "React Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes.",
  },
  {
    id: 6,
    question: "What is the purpose of the key prop in React lists?",
    answer:
      "The key prop helps React identify which items in a list have changed, are added, or are removed. Keys should be unique and stable identifiers for each list item.  Using indexes as keys is generally an anti-pattern.",
  },
  {
    id: 7,
    question: "Explain the difference between state and props.",
    answer:
      "Props (properties) are data passed down from a parent component to a child component.  State is data that is managed within a component itself. Props are immutable from the child's perspective, while state can be changed using setState (or the useState hook).",
  },
];

function Accordian({ data }) {
  const [curOpen, setCurOpen] = useState(null); // Initialize to null, not 0

  return (
    <div>
      {data.map((qa) => (
        <AccordianItem
          curOpen={curOpen}
          onOpen={setCurOpen} // Pass the setCurOpen function down
          question={qa.question}
          answer={qa.answer}
          id={qa.id}
          key={qa.id}
        />
      ))}
    </div>
  );
}

function AccordianItem({ id, question, answer, onOpen, curOpen }) {
  const isOpen = id === curOpen;

  const toggleAccordion = () => {
    onOpen(isOpen ? null : id); // Set curOpen to id or null if already open
  };

  return (
    <div>
      <h2 onClick={toggleAccordion}>
        {" "}
        {/* Add onClick handler */}
        {id}, {question}
      </h2>
      {isOpen && <p>{answer}</p>}
    </div>
  );
}

export default function App() {
  return <Accordian data={faqData} />;
}
