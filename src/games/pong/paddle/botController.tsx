import React, { useEffect } from "react";

interface BotControllerProps {
  paddleY: number;
  ballPositionY: number;
  setPaddleY: React.Dispatch<React.SetStateAction<number>>;
}

const offsetDelta = 5;

function BotController({ paddleY, ballPositionY, setPaddleY }: BotControllerProps) {
  const botSpeed = 3;

  useEffect(() => {
    const moveBot = () => {
      const delta = paddleY - ballPositionY;

      console.log("delta ", delta, paddleY, ballPositionY);

      if (Math.abs(delta) > offsetDelta) {
        if (delta > 0) {
          // Move para cima
          setPaddleY((prevY) => prevY - botSpeed);
        } else {
          // Move para baixo
          setPaddleY((prevY) => prevY + botSpeed);
        }
      }
    };

    const botInterval = setInterval(moveBot, 16); // Ajuste o intervalo conforme necessário

    return () => {
      clearInterval(botInterval);
    };
  }, [ballPositionY]);

  return null;
}

export default BotController;
