import { CSSProperties, memo, useEffect, useState } from "react";

interface CountdownTimerProps {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

function CountdownTimer(props: CountdownTimerProps) {
  const { days = 2, hours = 20, minutes = 30, seconds = 15 } = props;
  const [countdown, setCountdown] = useState({
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  });

  // console.log(countdown);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        const newCountdown = { ...prevCountdown };

        if (newCountdown.seconds > 0) {
          newCountdown.seconds -= 1;
        } else {
          newCountdown.seconds = 59;

          if (newCountdown.minutes > 0) {
            newCountdown.minutes -= 1;
          } else {
            newCountdown.minutes = 59;

            if (newCountdown.hours > 0) {
              newCountdown.hours -= 1;
            } else {
              newCountdown.hours = 23;

              if (newCountdown.days > 0) {
                newCountdown.days -= 1;
              } else {
                // Countdown is complete
                clearInterval(interval);
              }
            }
          }
        }

        return newCountdown;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-flow-col gap-2 text-center auto-cols-max text-white items-center font-bold text-xl ">
      {days && days > 0 && (
        <div className="flex flex-col p-2 rounded-lg text-gray-700 dark:text-gray-300 items-center w-12 capitalize bg-transparent border-2 border-gray-700">
          <span className="countdown font-mono text-2xl">
            <span
              style={{ "--value": countdown?.days } as CSSProperties}
            ></span>
          </span>
        </div>
      )}
      :
      {hours && hours > 0 && (
        <div className="flex flex-col p-2 rounded-lg text-gray-700 dark:text-gray-300 items-center w-12 capitalize bg-transparent border-2 border-gray-700">
          <span className="countdown font-mono text-2xl">
            <span
              style={{ "--value": countdown?.hours } as CSSProperties}
            ></span>
          </span>
        </div>
      )}
      :
      {minutes && minutes > 0 && (
        <div className="flex flex-col p-2 rounded-lg text-gray-700 dark:text-gray-300 items-center w-12 capitalize bg-transparent border-2 border-gray-700">
          <span className="countdown font-mono text-2xl">
            <span
              style={{ "--value": countdown?.minutes } as CSSProperties}
            ></span>
          </span>
        </div>
      )}
      :
      {seconds && seconds > 0 && (
        <div className="flex flex-col p-2 rounded-lg text-gray-700 dark:text-gray-300 items-center w-12 capitalize bg-transparent border-2 border-gray-700">
          <span className="countdown font-mono text-2xl">
            <span
              style={{ "--value": countdown?.seconds } as CSSProperties}
            ></span>
          </span>
        </div>
      )}
    </div>
  );
}

export default memo(CountdownTimer);
