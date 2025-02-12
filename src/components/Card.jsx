import { useEffect, useState } from "react";

function Card({ format }) {
  const [formattedString, setFormattedString] = useState("76");
  const [enteredString, setEnteredString] = useState("Poki");
  const handleChange = (e) => {
    setEnteredString(e.target.value);
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
          {formattedString}

          <div className="flex justify-center">
            <a
              href="#"
              className="items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Copy
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
