import { useState, useRef} from "react";
import ResultModal from "./ResultModal";


export default function TimerChallenge({ title, time }) {

    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(time * 1000);

    const active = timeRemaining > 0 && timeRemaining < time * 1000;

    if (timeRemaining <= 0) {
        handleStop();
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(previousTime => previousTime - 10);
        }, 10)
    }

    function handleStop() {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleReset() {
        setTimeRemaining(time * 1000);
    }


    return (
        <>
        <ResultModal timeRemaining={timeRemaining} time={time} ref={dialog} handleClose={handleReset}/>
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {time} {time === 1 ? "second" : "seconds"}
            </p>
            <p>
                <button onClick={active ? handleStop : handleStart}>
                    {active ? "Stop" : "Start"} Challenge
                </button>
            </p>
            <p className={active ? "active" : ""}>
                {active ? "Timer is running..." : "Timer inactive"}
            </p>
        </section>
        </>
    )
}