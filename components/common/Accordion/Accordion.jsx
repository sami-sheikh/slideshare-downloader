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
    <div className="divide-y divide-gray-200 divide-gray-700 border-gray-700 rounded-lg border w-[95%]">
      {data.map((item, index) => (
        <div key={index}>
          <button
            className="flex items-center justify-between w-full px-6 py-4 text-left focus:outline-none"
            onClick={() => toggleItem(index)}
          >
            <p className="text-white">{item.title}</p>
            {openIndexes.includes(index) ? (
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                aria-hidden="true"
                class="h-6 w-6 shrink-0 rotate-180"
                data-testid="flowbite-accordion-arrow"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
              </svg>
            ) : (
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                aria-hidden="true"
                class="h-6 w-6 shrink-0"
                data-testid="flowbite-accordion-arrow"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
              </svg>
            )}
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
