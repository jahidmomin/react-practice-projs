import "./App.css";
import { useState, useEffect,useCallback } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(7);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  let passwordGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTWXYZabcdefghijklmnopqrstwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()_+<>}{}|][";

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length) + 1;
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [setPassword,length,numberAllowed,charAllowed]);


  

  useEffect(() => {
    passwordGen();
    console.log("====================================");
    console.log(password);
    console.log("====================================");
  }, [numberAllowed, length, charAllowed]);

  return (
    <>
      <div className="bg-dark-200 container-md ">
        <label className="block flex">
          <input
            type="text"
            name="password"
            defaultValue={password}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            readOnly
          />
          <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            Copy
          </button>
        </label>
        <input
          type="range"
          className="m-3"
          name="length"
          value={length}
          min="6"
          max="40"
          onChange={(e) => setLength(e.target.value)}
        />
        length ({length})
      </div>
      <input
        type="checkbox"
        className="m-3"
        name="numberAllowed"
        value={numberAllowed}
        onChange={() => setNumberAllowed((prev) => !prev)}
      />{" "}
      Number Allowed ?
      <input
        type="checkbox"
        className="m-3"
        name="charAllowed"
        value={numberAllowed}
        onChange={() => setCharAllowed((prev) => !prev)}
      />
      Char Allowed ?
    </>
  );
}

export default App;
