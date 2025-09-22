"use client";
import { useEffect, useState } from "react";

export default function DaysCountDown() {
  const targetDate = new Date("2025-10-31T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = String(
        Math.floor(distance / (1000 * 60 * 60 * 24))
      ).padStart(2, "0");
      const hours = String(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).padStart(2, "0");
      const minutes = String(
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      ).padStart(2, "0");
      const seconds = String(
        Math.floor((distance % (1000 * 60)) / 1000)
      ).padStart(2, "0");

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="grid gap-[2rem] grid-cols-4">
      <div className="flex items-center w-[8rem] justify-center rounded-2xl h-[8rem] bg-white flex-col">
        <span className="text-[2.5rem]">{timeLeft.days}</span>
        <span>Dias</span>
      </div>
      <div className="flex items-center w-[8rem] justify-center rounded-2xl h-[8rem] bg-white flex-col">
        <span className="text-[2.5rem]">{timeLeft.hours}</span>
        <span>Horas</span>
      </div>
      <div className="flex items-center w-[8rem] justify-center rounded-2xl h-[8rem] bg-white flex-col">
        <span className="text-[2.5rem]">{timeLeft.minutes}</span>
        <span>Min.</span>
      </div>
      <div className="flex items-center w-[8rem] justify-center rounded-2xl h-[8rem] bg-white flex-col">
        <span className="text-[2.5rem]">{timeLeft.seconds}</span>
        <span>Seg.</span>
      </div>
    </div>
  );
}
