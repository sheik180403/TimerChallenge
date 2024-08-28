import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Name from "./Name";
import TimerChallage from "./TimerChallenge";

function App() {
  const [value, setValue] = useState("click the button");
  const handleClick = () => {
    setValue("hello world");
  };
  return (
    <>
      <div className="w-full m-0 pe-0">
        <Name />
      </div>
    </>
  );
}

export default App;
