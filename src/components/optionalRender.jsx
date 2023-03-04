import React, { useState } from 'react';

const ColorBox = () => {
  const [color, setColor] = useState('#000000');
  const [intervalId, setIntervalId] = useState(null);

  const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  const startColorChange = () => {
    const newIntervalId = setInterval(() => {
      setColor(generateRandomColor());
    }, 500);
    setIntervalId(newIntervalId);
  }

  const stopColorChange = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  }

  const handleDoubleClick = () => {
    if (intervalId) {
      stopColorChange();
    }
  }

  return (
    <>
    <h2>{intervalId === null ? "Posiciona el Mouse dentro de la caja" : "Saca el Mouse de la caja"}</h2>
    <div
      style={{ width: '255px', height: '255px', backgroundColor: color,cursor:"pointer" }}
      onMouseEnter={startColorChange}
      onMouseLeave={stopColorChange}
      onDoubleClick={handleDoubleClick}
    />
    <h2>{intervalId === null ? "" : "o da doble clic dentro de la caja"}</h2>
    </>
    
  );
}

export default ColorBox;
