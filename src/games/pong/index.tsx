import React, { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";

import Paddle from "./paddle";
import Ball from "./ball";
import BotController from "./paddle/botController";

import "./style.css";

interface GameProps {
  height: number;
}

const playerSpeed = 20;

function Pong({ height }: GameProps) {
  const [playerPaddleY, setPlayerPaddleY] = useState(0);
  const [botPaddleY, setBotPaddleY] = useState(0);
  const [paddleSize, setPaddleSize] = useState(0);
  const [ballPositionY, setBallPositionY] = useState(0);

  const limitYValue = height / 2 - paddleSize / 2 - 20;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" && playerPaddleY > -limitYValue)
        setPlayerPaddleY(playerPaddleY - playerSpeed);
      if (e.key === "ArrowDown" && playerPaddleY < limitYValue)
        setPlayerPaddleY(playerPaddleY + playerSpeed);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [playerPaddleY, height]);

  const handleCollision = () => {
    // Lidar com colisões (inverter a direção horizontal da bola)
    // Você pode adicionar lógica mais avançada aqui conforme necessário
  };

  const handleScore = () => {
    // Marcar pontos quando a bola ultrapassa os paddles
    // Adicione lógica de pontuação específica aqui
  };

  const playerPaddleBounds = {
    top: playerPaddleY,
    bottom: playerPaddleY + 80,
    left: 400,
    right: 410,
  };
  const botPaddleBounds = { top: botPaddleY, bottom: botPaddleY + 80, left: -400, right: -410 };

  return (
    <div className="game-container" style={{ height: `${height}px` }}>
      <div className="game-paddle">
        <Paddle
          y={botPaddleY}
          controller="bot"
          setPaddleSize={(value: number) => setPaddleSize(value)}
        />
        <Ball
          x={0}
          y={0}
          radius={10}
          onCollision={handleCollision}
          onScore={handleScore}
          setBallPositionY={(yValue: number) => setBallPositionY(yValue)}
          playerPaddleBounds={playerPaddleBounds}
          botPaddleBounds={botPaddleBounds}
        />
        <Paddle
          y={playerPaddleY}
          controller="player"
          setPaddleSize={(value: number) => setPaddleSize(value)}
        />
      </div>

      <BotController
        ballPositionY={ballPositionY - height / 2}
        paddleY={botPaddleY}
        setPaddleY={setBotPaddleY}
      />
    </div>
  );
}

export default Pong;
