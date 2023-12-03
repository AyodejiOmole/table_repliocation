import React from 'react';
import { BsArrowUp } from "react-icons/bs";
import { meter, meter_two } from "../assets";

const Speedometer = ({ percentage }) => {
  const arrowRotation = `rotate(${(percentage / 100) * 180 - 90}deg)`;

  return (
    <div className="relative flex flex-col items-center justify-center whitespace-nowrap">
        <p className="text-xs">Max Profit</p>
        {/* Speedometer image */}
        <img src={meter_two} alt="Speedometer" className="h-30 w-24 p-0" />

        {/* Arrow */}
        <div
            className="absolute top-1/2 left-auto right-auto"
            style={{ transform: arrowRotation }}
        >
            <BsArrowUp className="w-6 h-6"/>
        </div>
        <div className="flex items-center gap-2 space-between">
            <p className="text-xs">Min</p>
            <p className="text-xs">Revenue</p>
            <p className="text-xs">Max</p>
        </div>
    </div>
  );
};

export default Speedometer;
