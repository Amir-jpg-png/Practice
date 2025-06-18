export default function GameOver({winner, onReset}) {

    let message = <p>{winner} won!</p>;

    if (!winner) {
        message = <p>It&apos;s a draw</p>;
    }

    return (
        <div id="game-over">
            <h2>
                Game Over
            </h2>
            {message}
            <p>
                <button onClick={onReset}>
                    Rematch!
                </button>
            </p>
        </div>
    )
}