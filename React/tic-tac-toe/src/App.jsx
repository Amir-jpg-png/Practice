import { useState } from 'react'
import Player from "./components/player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"
import {WINNING_COMBINATIONS} from "./Winning_Combinations.js";
import GameOver from "./components/GameOver.jsx"

const PLAYERS = {
    X: "Player 1",
    O: "Player 2"
}

const INITIAL_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];


function deriveActivePlayer(prevTurns) {
    let currentPlayer = 'X';

    if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
    }

    return (currentPlayer);
}

function deriveGameBoard(gameTurns) {
    let gameBoard = [...INITIAL_BOARD].map(array => [...array]);


    for (let i = 0; i < gameTurns.length; i++) {
        const { square, player } = gameTurns[i];
        const {row, col} = square;

        gameBoard[row][col] = player;
    }
    return gameBoard;
}

function deriveWinner(gameBoard, players) {
    let winner;

    for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
        const combination = WINNING_COMBINATIONS[i];

        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
        if (firstSquareSymbol && firstSquareSymbol == secondSquareSymbol && firstSquareSymbol == thirdSquareSymbol) {
            winner = players[firstSquareSymbol];
        }
    }
    return winner;
}



function App() {
    const [gameTurns, setGameTurns] = useState([]);
    const [players, setPlayers] = useState(PLAYERS);


    const activePlayer = deriveActivePlayer(gameTurns);
    const gameBoard = deriveGameBoard(gameTurns);
    const winner = deriveWinner(gameBoard, players);
    const hasDraw = gameTurns.length === 9 && !winner;


    function handleSelectSquare(rowIndex, colIndex) {
        setGameTurns(prevTurns => {
            const currentPlayer = deriveActivePlayer(prevTurns);
           return [{square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurns];
        })
    }

    function handleRestart () {
        setGameTurns([]);
    }

    function handlePlayerNameSave(symbol, newName) {
        setPlayers(prevPlayers => {
            return {
                ...prevPlayers,
                [symbol]: newName
            }
        })
    }

    return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={PLAYERS.X} symbol="X" isActive={activePlayer === 'X'} onChangeName={handlePlayerNameSave} />
          <Player initialName={PLAYERS.O} symbol="O" isActive={activePlayer === 'O'} onChangeName={handlePlayerNameSave}/>
        </ol>
          {(winner || hasDraw) && <GameOver winner={winner} onReset={handleRestart}/>}
          <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
        <Log turns={gameTurns} />
    </main>
  )
}

export default App
