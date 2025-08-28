"use client";
// 3. Toggle Visibility "Easy"

import { useState } from "react";

export const ToggleVisibility = () => {
  const [isVisible, setIsVisible] = useState(true);

  const HandleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="w-[300] h-[100] bg-white text-black text-2xl my-[30] mx-[30] pl-[5]">
      <h3>3.)</h3>
      <button onClick={HandleToggleVisibility}>Show/Hide Text</button>
      {isVisible && <p>Toggle me!</p>}
    </div>
  );
};

// export default ToggleVisibility;
