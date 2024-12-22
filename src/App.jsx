import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button onClick={onSquareClick} className="square">
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    // Salin array menggunakan slice()
    const nextSquares = squares.slice();
    nextSquares[i] = 'X'; // Ubah nilai pada indeks tertentu
    setSquares(nextSquares); // Perbarui state
  }

  return (
    <div className="board">
      {squares.map((value, index) => (
        <Square
          key={index}
          value={value}
          onSquareClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}
