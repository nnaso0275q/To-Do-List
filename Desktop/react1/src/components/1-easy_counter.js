"use client";
// 1. Counter "Easy"

import React, { useState } from "react";

export const EasyCounter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    console.log("clicked", count);
    setCount(count + 1);
  };

  return (
    <div className="w-[300] h-[100] bg-white text-black text-2xl my-[30] mx-[30] pl-[5]">
      <h3>1.)</h3>
      <button
        className="border-2 border-gray-500 w-[130]"
        onClick={handleClick}
      >
        Increment
      </button>
      <p>Count: {count}</p>
    </div>
  );
};

// export default EasyCounter;
