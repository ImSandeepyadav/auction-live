import React, { useState, useEffect, useRef } from 'react';

const STATUS = {
  STARTED: 'Started',
  STOPPED: 'Stopped',
};

const INITIAL_COUNT = 60 * 3 + 20;
export default function Countdown({item}) {
  const [secondsRemaining, setSecondsRemaining] = useState(parseInt(item.time));
  const [status, setStatus] = useState(STATUS.STARTED);

  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;
  const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60;

  console.log(item)
  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setStatus(STATUS.STOPPED);
      }
    },
    status === STATUS.STARTED ? 1000 : null,
    // passing null stops the interval
  );

  let color;
  if (+twoDigits(minutesToDisplay) > 2) {
    color = 'green';
  }
  if (+twoDigits(minutesToDisplay) >= 1 && +twoDigits(minutesToDisplay) <= 2) {
    color = 'yellow';
    console.log('c');
  }
  if (+twoDigits(minutesToDisplay) < 1) {
    color = 'red';
  }

  return (
    <div className="App">
      <div
        style={{
          padding: 5,
          color: color,
        }}
      >
        {twoDigits(hoursToDisplay)}:
        {twoDigits(minutesToDisplay)}:{twoDigits(secondsToDisplay)}
      </div>
    </div>
  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const twoDigits = (num) => String(num).padStart(2, '0');