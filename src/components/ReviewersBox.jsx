import React from 'react';
import { FaCheck } from "react-icons/fa";

const ReviewersBox = ({ name }) => {
  return (
    <div className="bg-green-400 rounded-full w-full whitespace-nowrap gap-2 tracking-wider items-center flex space-between py-2 whitespace-no-wrap px-3">
        <p className="text-black text-xs font-semibold whitespace-nowrap"> {name} </p>
        <FaCheck size={10} />
    </div>
  )
}

export default ReviewersBox;
