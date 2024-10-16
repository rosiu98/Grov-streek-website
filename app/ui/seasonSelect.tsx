"use client";

import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  currentSeason: string;
  setCurrentSeason: React.Dispatch<React.SetStateAction<string>>;
};

const SeasonSelect = ({ currentSeason, setCurrentSeason }: Props) => {
  const handleValueChange = (value: string) => {
    setCurrentSeason(value);
  };

  return (
    <Select onValueChange={handleValueChange} defaultValue={currentSeason}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={`Sezon ${currentSeason}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sezony:</SelectLabel>
          <SelectItem value="8">Sezon 8</SelectItem>
          <SelectItem value="9">Sezon 9</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SeasonSelect;
