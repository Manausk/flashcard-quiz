import React, { useState, useEffect } from "react";
import FlashcardList from "./FlashcardList";
import "./app.css";

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
  return <FlashcardList flashcards={flashcards} />;
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "What is 2 + 2?",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 2,
    question: "What is Question?",
    answer: "Jani Na",
    options: ["Jani Na", "Jani Na 3", "Jani Na 4", "Jani Na 5"],
  },
];

export default App;
