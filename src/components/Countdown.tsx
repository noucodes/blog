import { useState, useEffect } from "react";

const Countdown = () => {
  const eventDate = new Date("2025-03-10T07:59:59").getTime(); // Set your target date
  const [timeRemaining, setTimeRemaining] = useState<number>(
    eventDate - new Date().getTime()
  );

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const currentTime = new Date().getTime();
      const remainingTime = eventDate - currentTime;

      if (remainingTime <= 0) {
        setTimeRemaining(0);
        clearInterval(countdownInterval);
        alert("Countdown complete!");
      } else {
        setTimeRemaining(remainingTime);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  const calculateTime = (ms: number) => {
    if (ms <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(ms / (1000 * 60 * 60 * 24)),
      hours: Math.floor((ms / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((ms / (1000 * 60)) % 60),
      seconds: Math.floor((ms / 1000) % 60),
    };
  };
  +63;

  const { days, hours, minutes, seconds } = calculateTime(timeRemaining);
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen font-display">
      <h2 className="text-center w-fit mb-8 text-2xl md:text-4xl lg:text-5xl font-bold">
        READY TO LAUNCH
      </h2>
      <div className="row w-fit grid grid-cols-4 gap-2 md:gap-8 text-xs md:text-base lg:text-2xl">
        <div className="days rounded-lg shadow-lg p-2 md:p-6 lg:p-8 text-center bg-white">
          <p className="text-center font-extrabold text-2xl md:text-4xl lg:text-7xl text-zinc-950">
            {days}
          </p>
          <span className="text-center font-medium text-zinc-500">DAYS</span>
        </div>
        <div className="hours rounded-lg shadow-lg p-2 md:p-6 lg:p-8 text-center bg-white">
          <p className="text-center font-extrabold text-2xl md:text-4xl lg:text-7xl text-zinc-950">
            {hours}
          </p>
          <span className="text-center font-medium text-zinc-500">HOURS</span>
        </div>
        <div className="minutes rounded-lg shadow-lg p-2 md:p-6 lg:p-8 text-center bg-white">
          <p className="text-center font-extrabold text-2xl md:text-4xl lg:text-7xl text-zinc-950">
            {minutes}
          </p>
          <span className="text-center font-medium text-zinc-500">MINUTES</span>
        </div>
        <div className="seconds rounded-lg shadow-lg p-2 md:p-6 lg:p-8 text-center bg-white">
          <p className="text-center font-extrabold text-2xl md:text-4xl lg:text-7xl text-zinc-950">
            {seconds}
          </p>
          <span className="text-center font-medium text-zinc-500">SECONDS</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
