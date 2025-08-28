"use client";
import { useState } from "react";

export const ColorSwitcher = () => {
  const [bgColor, setBgColor] = useState("");

  const handleColorChange = (event) => {
    setBgColor(event.target.value);
  };
  return (
    <div className="w-[300] h-[200] bg-white text-black text-2xl my-[30] mx-[30] pl-[5]">
      <h3>6.)</h3>
      <select onChange={handleColorChange}>
        <option
          className="w-[100] h-[25] border-2 border-gray-500 border-solid "
          value=""
        >
          Select a color
        </option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="pink">Pink</option>
      </select>
      <div
        style={{ backgroundColor: bgColor, width: "100px", height: "100px" }}
      ></div>
    </div>
  );
};

// export default ColorSwitcher;
