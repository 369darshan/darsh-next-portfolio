"use client"
import { cn } from "../../utils/cn";
import { useState, useEffect } from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<{
    left: string;
    animationDelay: string;
    animationDuration: string;
  }>>([]);

  useEffect(() => {
    const styles = new Array(number || 20).fill(true).map(() => ({
      left: Math.floor(Math.random() * (1580 - -400) + -400) + "px",
      animationDelay: Math.random() * (0.9 - 0.2) + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);

  const meteors = new Array(number || 20).fill(true);

  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-blue-800 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#70d2df] before:to-transparent ",
            className
          )}
          style={{
            top: 0,
            left: meteorStyles[idx]?.left || "0px",
            animationDelay: meteorStyles[idx]?.animationDelay || "0s",
            animationDuration: meteorStyles[idx]?.animationDuration || "2s",
          }}
        ></span>
      ))}
    </>
  );
};
