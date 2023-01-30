import React from "react";

export const AuthorBox = ({ author }) => {
  return (
    <div className="mt-1 flex justify-end">
      <span id="author">- {author}</span>
    </div>
  );
};
