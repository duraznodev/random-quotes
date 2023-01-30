import React from "react";

export const PrimaryButton = ({ text, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      id="new-quote"
      className="rounded-lg bg-gray-800 py-1 px-4 text-lg  font-medium text-gray-200  hover:bg-gray-700"
    >
      {text}
    </button>
  );
};
