"use client";
// 4. Character Counter "Medium"

import { useState } from "react";

export const CharacterCounter = () => {
  const [text, setText] = useState("");

  const handleTextareaChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="w-[300] h-[100] bg-white text-black text-2xl my-[30] mx-[30] pl-[5]">
      <h3>4.)</h3>
      <textarea
        className="w-[200] h-[25] border-2 border-solid border-gray-500"
        value={text}
        onChange={handleTextareaChange}
      />
      <p>Character count: {text.length}</p>
    </div>
  );
};

// export default CharacterCounter;
