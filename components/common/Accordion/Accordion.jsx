"use client";

import React, { useState } from "react";

export default function Accordion({ data }) {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleItem = (index) => {
    setOpenIndexes((prevOpenIndexes) =>
      prevOpenIndexes.includes(index)
        ? prevOpenIndexes.filter((i) => i !== index)
        : [...prevOpenIndexes, index]
    );
  };

  return (
    <div className="divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700 rounded-lg border w-[95%]">
      {data.map((item, index) => (
        <div key={index}>
          <button
            className="w-full text-left py-4 px-6  focus:outline-none"
            onClick={() => toggleItem(index)}
          >
            <p className="text-white">{item.title}</p>
          </button>
          <div
            className={`overflow-hidden transition-max-height duration-300 ease-in-out bg-white/10 ${
              openIndexes.includes(index) ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="p-6 text-white">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
