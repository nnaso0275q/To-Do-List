"use client";
import { useState } from "react";
const items = ["Apple", "Banana", "Carrot", "Date", "Eggplant", "Fig", "Grape"];

export const SearchFilter = () => {
  const [search, setSearch] = useState("");

  const handleInputChange = (event) => {
    setSearch[event.target.value];
  };
  return (
    <div className="w-[300] h-[200] bg-white text-black text-2xl my-[30] mx-[30] pl-[5]">
      <h3>7.)</h3>
      <input
        className="w-[200] h-[25] border-2 border-solid border-gray-500"
        type="text"
      />
      <ul>{/* Render the filtered list of items here */}</ul>
    </div>
  );
};

// export default SearchFilter;
