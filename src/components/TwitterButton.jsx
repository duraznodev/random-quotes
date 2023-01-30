import React from "react";

export const TwitterButton = ({ quote, author }) => {
  return (
    <a
      target="_blank"
      href={`https://twitter.com/intent/tweet?related=freecodecamp&text="${quote}"-${author}`}
      id="tweet-quote"
      className="flex items-center  gap-2 rounded-lg bg-gray-800 py-1 px-4 text-gray-200 hover:bg-gray-700"
    >
      <i className="fa fa-twitter text-lg"></i>
    </a>
  );
};
