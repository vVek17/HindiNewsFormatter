import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  const formatTheString = (string) => {
    const charArray = string.split(" ");
    // const result = charArray.filter((ch) => {
    //   return !/^[A-Za-z]$/.test(ch);
    // });

    // const result = charArray.filter((word) => {
    //   return !/^[A-Za-z]$/.test(word);
    // });

    const result = charArray.filter((word) => {
      return !/^[A-Za-z]$/.test(word.charAt(0));
      // return !(word.charAt(0) === "/^[A-Za-z]$/");
    });

    return result.join(" ");
  };

  return (
    <>
      <Card format={formatTheString} />
    </>
  );
}

export default App;
