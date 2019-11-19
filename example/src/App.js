import React, { useState } from "react";
import { HelloWorld, ByeWorld } from "@ericpuskas/react-to-npm";

const App = () => {
  const [title, setTitle] = useState("");
  const handleChange = () => {
    setTitle("Hello World");
  };
  return (
    <div>
      {title}
      <button onClick={handleChange}> Click me </button>
      <HelloWorld />
      <ByeWorld />
    </div>
  );
};

export default App;
