"use client";
// 2. Controlled Input Field "Easy"

import React, { useState } from "react";

export const InputField = () => {
  const [text, setText] = useState("");

  const ControlledInputFieald = (event) => {
    console.log("clicked", text);
    setText(event.target.value);
  };

  return (
    <div className="w-[300] h-[100] bg-white text-black text-2xl my-[30] mx-[30] pl-[5]">
      <h3>2.)</h3>
      <input
        className="w-[200] h-[25] border-2 border-solid border-gray-500"
        type="text"
        value={text}
        onChange={ControlledInputFieald}
      />
      <p>Input text: {text}</p>
    </div>
  );
};

// export default InputField;
