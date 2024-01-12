import React, { useRef, useEffect } from "react";

import "./style.css";

interface PaddleProps {
  y: number;
  controller: "player" | "bot";
  setPaddleSize: (size: number) => void;
}

function Paddle({ y, controller, setPaddleSize }: PaddleProps) {
  const paddleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (paddleRef.current) {
      const paddleHeight = paddleRef.current.clientHeight;
      setPaddleSize(paddleHeight);
    }
  }, [setPaddleSize]);

  return <div ref={paddleRef} className="paddle" style={{ top: y }} />;
}

export default Paddle;
