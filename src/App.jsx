import { useState } from "react";
import "./App.css";
import CardPage from "./pages/CardPage";

function App() {
  const [count, setCount] = useState(0);

  const formatTheString = (string) => {
    const charArray = string.split(" ");
    const result = charArray.filter((word) => {
      return !/^[A-Za-z]$/.test(word.charAt(0));
    });

    const doubleQuoteAdded = '"' + result.join(" ") + '"';
    return doubleQuoteAdded;
  };

  return (
    <>
      <CardPage format={formatTheString} />
    </>
  );
}

export default App;
