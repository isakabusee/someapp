import React, { useState, useEffect } from 'react'

const Timer = () => {
    const [timer, setTimer] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [intervalId, setIntervalId] = useState(0);
    let interval;

    useEffect(() => {
        if(timer > 99999) setTimer(0);
    }, [timer], clearInterval(interval))

    const startTimer = () => {
        if (!isTimerRunning) {
            interval = setInterval(() => {
                setTimer((timer) => (timer += 1));
            }, 1000);
            setIntervalId(interval);
            setIsTimerRunning(true);
        }
    };
    const stopTimer = () => {
        clearInterval(intervalId);
        setIsTimerRunning(false);
    };
    return(
        <>
        <span>Timer: {timer}</span>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        </>
    )
}
export default Timer;