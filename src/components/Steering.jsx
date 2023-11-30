import React from 'react';
import { s_max, s_min, s_avg } from "../assets";

const Steering = ({ value }) => {
  return (
    <div className="flex flex-col gap-1 items-center justify-center whitespace-nowrap">
        <p className="text-xs">Max Profit</p>
        <img src={`${ value === "min" ? s_min: value === "max" ? s_max : s_avg }`} className="w-14 h-14"/>
        <div className="flex items-center gap-2 space-between">
            <p className="text-xs">Min</p>
            <p className="text-xs">Revenue</p>
            <p className="text-xs">Max</p>
        </div>
    </div>
  )
}

export default Steering;
