import { useEffect, useRef, useState } from "react";

function Card({ format }) {
  const [formattedString, setFormattedString] = useState("76");
  const [enteredString, setEnteredString] = useState("Poki");
  const handleChange = (e) => {
    setEnteredString(e.target.value);
  };

  const resultRef = useRef();

  const copyText = () => {
    //copy
    window.navigator.clipboard.writeText(formattedString);
    //select style
    const range = document.createRange();
    range.selectNodeContents(resultRef.current);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  };

  useEffect(() => {
    setFormattedString(format(enteredString));
  }, [enteredString]);

  return (
    <>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col gap-5">
          <div href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Paste News Here
            </h5>
          </div>

          <input
            className="bg-gray-700 rounded-2xl"
            onChange={handleChange}
            defaultValue={enteredString}
          />
          <div ref={resultRef}>{formattedString}</div>

          <div className="flex justify-center">
            <button
              className="bg-green-800 text-white text-xl px-4 py-2 rounded-xl"
              onClick={copyText}
            >
              copy
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
