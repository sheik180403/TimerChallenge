import { useRef, useState } from "react";
import Result from "./Result";

function TimerChallage({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  //   const [timerStrarted, setTimerStrated] = useState(false);
  //   const [timerExpired, setTimerExpired] = useState(false);

  const [timerRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive =
    timerRemaining > 0 && timerRemaining < targetTime * 1000;

  if (timerRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  if (timerIsActive) {
    console.log("working");
  } else {
    console.log("false");
  }

  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prev) => prev - 10);
    }, 10);
  };

  const handleStop = () => {
    dialog.current.open();
    clearInterval(timer.current);
  };
  return (
    <>
      <Result
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timerRemaining}
      />

      <section className="bg-emerald-400 border-none  sm:w-80 sm:h-80  w-60  h-60 rounded-md flex flex-col  items-center  border-2  ">
        <h2 className=" sm:text-3xl  uppercase lg:font-bold font-extrabold mt-8">
          {title}
        </h2>
        {/* <p className="mt-2 text-red-700 ">{timerExpired && "you lost!"}</p> */}
        <p className="border-2 rounded-md mt-3 border-gray-600 p-1">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>

        <button
          onClick={timerIsActive ? handleStop : handleStart}
          className="bg-black text-white p-2 font-mono hover:bg-gray-900 m-10 rounded-md"
        >
          {timerIsActive ? "stop" : "start"} Challenge
        </button>
        <p className=" text-transparent sm:text-black">
          {timerIsActive ? "Time is runnung..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}

export default TimerChallage;
