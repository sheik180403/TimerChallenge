import { useRef, useState } from "react";
import TimerChallage from "./TimerChallenge";

function Name() {
  const player = useRef();
  const [name, setName] = useState("unknown name");

  const handleClick = () => {
    setName(player.current.value);
    player.current.value = "";
  };

  return (
    <>
      <div className="container  mx-auto  flex flex-col items-center justify-center  sm:bg-black my-16 pt-10 pb-10 w-3/5 font-sans rounded-2xl">
        <h1 className="text-center text-3xl font-extrabold uppercase word text-white">
          the <span className="text-emerald-400">almost </span>final countdown
        </h1>
        <h3 className="text-center text-white p-2 text-lg">
          welcome {name ?? "unknown name"}
        </h3>
        <input
          className="border-solid bg-transparent p-1 w-64 border-2 rounded-md  border-emerald-400 text-white text-start "
          ref={player}
          type="text"
          placeholder="enter your name"
        />
        <button
          className="border-solid border-2 border-transparent font-mono bg-emerald-400 font-bold text-gray-900 p-1.5 mt-4 rounded-md w-36 hover:bg-emerald-500"
          onClick={handleClick}
        >
          set name
        </button>
        <div className=" grid grid-cols-1 sm:grid-cols-1  xl:grid-cols-2 gap-10 lg:gap-10 xl:gap-30 mt-16 ">
          <TimerChallage title="Easy" targetTime={1} />
          <TimerChallage title="Not easy" targetTime={5} />
          <TimerChallage title="Getting tough" targetTime={10} />
          <TimerChallage title="Pros only" targetTime={15} />
        </div>
      </div>
    </>
  );
}

export default Name;
