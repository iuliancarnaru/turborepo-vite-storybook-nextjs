import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "ui";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button label="Click from Vite" />
    </div>
  );
}

export default App;
