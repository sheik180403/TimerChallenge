import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Result = forwardRef(function Result({ targetTime, remainingTime }, ref) {
  const dialog = useRef();

  const lost = remainingTime <= 0;
  const formatTime = (remainingTime / 1000).toFixed(2); //   toFixed give exactly decimal digit

  const score = Math.abs(
    Math.round(1 - (remainingTime / (targetTime * 1000)) * 100)
  );

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  const handleClose = () => {
    dialog.current.close();
  };

  return createPortal(
    <dialog
      ref={dialog}
      className="lg:h-48 lg:w-1/4 rounded-md sm:h-16 sm:w-10"
    >
      <h2 className="text-3xl text-center font-mono font-bold mt-4">
        {lost ? "Lost" : "Your Score : " + score}
      </h2>
      <div className="ms-8">
        <p className="mt-2">
          The target time was <strong>{targetTime} seconds.</strong>
        </p>
        <p className="mt-1">
          You stopped the timer with <strong>{formatTime} seconds left.</strong>
        </p>
      </div>
      <form onClick={handleClose}>
        <button className="lg:mt-5 border-2 text-sm rounded-md lg:ms-40 border-black p-1 px-2 ms-32 bg-black mb-5 text-white">
          Close
        </button>
      </form>
    </dialog>,
    document.getElementById("model")
  );
});

export default Result;
