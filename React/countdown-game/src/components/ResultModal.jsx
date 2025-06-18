import { useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";


export default function ResultModal({timeRemaining, time, ref, handleClose}) {
    const dialog = useRef();

    const userLost = timeRemaining <= 0;

    const formattedTimeLeft = (timeRemaining/1000).toFixed(2);

    const score = Math.round((1 - timeRemaining / (time* 1000))*100);

    useImperativeHandle(ref, () => ({
        open() {
            dialog.current.showModal();
        }
    }));

    return createPortal(
        <dialog className="result-modal" ref={dialog} onClose={handleClose}>
            {userLost && <h2>You lost</h2>}

            {!userLost && <h2>Your Score: {score}</h2>}

            <p>
                The target time was <strong>{time} seconds</strong>.
            </p>
            <p>
                You stopped the timer with <strong>{formattedTimeLeft} seconds remaining</strong>.
            </p>
            <form method="dialog" onSubmit={handleClose}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById("modal")
    )
}