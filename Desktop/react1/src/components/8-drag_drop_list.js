import React from "react";

const initialItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

export const DragDropList = () => {
  return (
    <div className="w-[300] h-[200] bg-white text-black text-2xl my-[30] mx-[30] pl-[5]">
      <h3>8.)</h3>
      <ul>{/* Render the list of items here */}</ul>
    </div>
  );
};

// export default DragDropList;
