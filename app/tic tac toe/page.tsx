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
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));

  // Type annotation for the handleClick function
  function handleClick(i: number): void {
    const nextSquares = squares.slice();
    nextSquares[i] = 'X'; // Update the clicked square with "X"
    setSquares(nextSquares);
  }

  return (
    <>
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
    </>
  );
}
