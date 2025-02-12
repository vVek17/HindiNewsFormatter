import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import CardPage from "./pages/CardPage";

function App() {
  const [count, setCount] = useState(0);

  const formatTheString = (string) => {
    const charArray = string.split(" ");
    const result = charArray.filter((word) => {
      return !/^[A-Za-z]$/.test(word.charAt(0));
    });

    return result.join(" ");
  };

  return (
    <>
      <CardPage format={formatTheString} />
    </>
  );
}

export default App;
