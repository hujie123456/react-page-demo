import { useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

const useCircle = (
  length: number = 0,
  direction: "left" | "right" = "right"
): [number, Dispatch<SetStateAction<number>>] => {
  const min = 0;
  const max = length - 1;
  const defaultCount = direction === "right" ? min : max;

  const [count, setCount] = useState<number>(defaultCount);

  useEffect(() => {
    if (count < min) {
      setCount(max);
    }
    if (count > max) {
      setCount(min);
    }
  }, [count]);

  return [count, setCount];
};

export default useCircle;
