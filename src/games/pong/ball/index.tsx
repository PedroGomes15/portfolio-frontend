// Ball.tsx
import React, { useState, useEffect } from "react";
import "./style.css";

interface BallProps {
  x: number;
  y: number;
  radius: number;
  onCollision: () => void;
  onScore: () => void;
  setBallPositionY: (yValue: number) => void;
  playerPaddleBounds: { top: number; bottom: number; left: number; right: number };
  botPaddleBounds: { top: number; bottom: number; left: number; right: number };
}

const Ball = ({
  x,
  y,
  radius,
  onCollision,
  onScore,
  playerPaddleBounds,
  botPaddleBounds,
  setBallPositionY,
}: BallProps) => {
  const [ballPosition, setBallPosition] = useState({ x, y });
  const [ballSpeed, setBallSpeed] = useState({ dx: 2, dy: 2 }); // Ajuste conforme necessário

  useEffect(() => {
    const ballInterval = setInterval(() => {
      moveBall();
    }, 16); // Ajuste o intervalo conforme necessário

    return () => {
      clearInterval(ballInterval);
    };
  }, [ballSpeed]);

  const moveBall = () => {
    setBallPosition((prevPosition) => {
      const newBallX = prevPosition.x + ballSpeed.dx;
      const newBallY = prevPosition.y + ballSpeed.dy;

      const yLimit = 305 - radius * 2;
      const xLimit = 430;

      if (newBallY <= -yLimit || newBallY >= yLimit) {
        setBallSpeed({ ...ballSpeed, dy: -ballSpeed.dy });
      }

      // Verificar colisões com as pás
      if (
        (newBallX >= playerPaddleBounds.right &&
          newBallY >= playerPaddleBounds.top &&
          newBallY <= playerPaddleBounds.bottom) ||
        (newBallX <= botPaddleBounds.left &&
          newBallY >= botPaddleBounds.top &&
          newBallY <= botPaddleBounds.bottom)
      ) {
        setBallSpeed({ ...ballSpeed, dx: -ballSpeed.dx });
        onCollision();
      }

      // Verificar se a bola ultrapassou os paddles
      if (newBallX < -xLimit || newBallX > xLimit) {
        onScore(); // Chamando a função de pontuação
      }
      return { x: newBallX, y: newBallY };
    });
    setBallPositionY(ballPosition.y);
  };

  return (
    <div
      className="ball"
      style={{
        left: ballPosition.x,
        top: ballPosition.y,
        width: radius * 2,
        height: radius * 2,
        borderRadius: "50%",
      }}
    />
  );
};

export default Ball;
