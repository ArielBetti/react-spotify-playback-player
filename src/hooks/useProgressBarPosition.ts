import { useEffect, useState } from "react";

export interface IUseProgressBarPostion {
  position?: number;
  hasPaused?: boolean;
  duration?: number;
}

export const useProgressBarPosition = ({
  position,
  hasPaused,
  duration,
}: IUseProgressBarPostion) => {
  let positionRef = Number(
    (((position || 0) / (duration || 0)) * 100).toFixed(1)
  );
  let percentage = positionRef / 100 || 0;
  let progressBar = Math.round((duration || 0) * percentage);

  const [currentPosition, setCurrentPosition] = useState(positionRef);

  useEffect(() => {
    if (!hasPaused) {
      const interval = setInterval(() => {
        setCurrentPosition((progressBar += 300));
      }, 300);

      return () => clearInterval(interval);
    }
  }, [hasPaused, position, duration]);

  return [currentPosition, positionRef];
};
