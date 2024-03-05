"use client";

import React from "react";
import { useCountdown } from "../hooks/useCountdown";
import DateTimeDisplay from "./DateTimeDisplay";

const CountdownTimer = ({ targetDate }: { targetDate: number }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return null;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

const ShowCounter = ({
  days,
  hours,
  minutes,
  seconds,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}) => {
  return (
    <div className="flex gap-2 lg:gap-4 text-sm lg:text-base items-center justify-center text-black font-bold">
      <DateTimeDisplay value={days} type={"Dni"} isDanger={days <= 3} />
      <p className="hidden md:block">:</p>
      <DateTimeDisplay value={hours} type={"Godz"} isDanger={false} />
      <p className="hidden md:block">:</p>
      <DateTimeDisplay value={minutes} type={"Min"} isDanger={false} />
      <p className="hidden md:block">:</p>
      <DateTimeDisplay value={seconds} type={"Sekund"} isDanger={false} />
    </div>
  );
};

export default CountdownTimer;
