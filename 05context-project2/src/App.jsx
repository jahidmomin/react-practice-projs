import Card from "./componenets/Card";
import ThemeBtn from "./componenets/ThemeBtn";
import { useState,useEffect } from "react";
import { ThemeContextProvider } from "./contexts/ThemeContext";

function App() {
  const [themeMode, setthemeMode] = useState("light");

  const darkMode = () => {
    setthemeMode("dark");
  };

  const lightMode = () => {
    setthemeMode("light");
  };


  useEffect(() => {
    
    document.querySelector("html").classList.remove("light","dark");
    document.querySelector("html").classList.add(themeMode);
  
  }, [themeMode])
  

  return (
    <>
      <ThemeContextProvider value={{themeMode, darkMode, lightMode}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>
            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeContextProvider>
    </>
  );
}

export default App;


