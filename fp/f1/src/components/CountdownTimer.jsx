import React, { useState, useEffect } from 'react';
import './CountdownTimer.css'; // Assuming you have a CSS file for styling

const CountdownTimer = () => {

  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate remaining time
      const targetDateTime = new Date('2024-03-31 00:00:00'); // Replace with your target date and time
      const now = new Date();
      const remainingTime = targetDateTime.getTime() - now.getTime();

      // Convert remaining time into days, hours, minutes, and seconds
      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

      // Update the state with the remaining time
      setTimeRemaining({ days, hours, minutes, seconds });
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Clear the interval on cleanup
  }, []);

  return (
    <>
      <div className='countdown-timer'>
        <span className='days'>{timeRemaining.days}</span>
        <span className='dy1'>:</span>
        <span className='hours'>{timeRemaining.hours}</span>
        <span className='hr1'>:</span>
        <span className='minutes'>{timeRemaining.minutes}</span>
        <span className='min1'>:</span>
        <span className='seconds'>{timeRemaining.seconds}</span>
      </div>
    </>
  );
};

export default CountdownTimer;
