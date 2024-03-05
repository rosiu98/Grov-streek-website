"use client";

import React from "react";

const DateTimeDisplay = ({
  value,
  type,
  isDanger,
}: {
  value: number;
  type: string;
  isDanger: boolean;
}) => {
  return (
    <div className="bg-[#DC8A02] w-[80px] h-[70px] flex flex-col items-center justify-center rounded-md text-white font-semibold">
      <p>{value}</p>
      <span className="text-[11px] ">{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
