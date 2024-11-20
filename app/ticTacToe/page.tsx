"use client";
import { useState } from 'react';
import styles from "./page.module.css";


// Define the props for the Square component
type SquareProps = {
  value: string | null;
  onSquareClick: () => void;
};

function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button className={styles.square} onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  // State type: An array of 9 elements, each being either a string or null
  const [xIsNext, setIsNext] = useState<boolean>(true);
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
  
  // Type annotation for the handleClick function
  function handleClick(i: number): void {
    if (squares[i] || calculateWinner(squares)){
      return;
    }

    const nextSquares = squares.slice();
    if( xIsNext){
      nextSquares[i] = 'X'; // Update the clicked square with "X"
    }
    else{
      nextSquares[i] = 'O'; // Update the clicked square with "O"
    }
    setSquares(nextSquares);
    setIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if(winner) {
    status = "Winner: " + winner;
  }
  else{
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className={styles.status}>{status}</div>
      <div className={styles.board}>
      <div className={styles.boardRow}>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className={styles.boardRow}>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className={styles.boardRow}>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      </div>
    </>
  );

  function calculateWinner(squares : (string | null)[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
}


