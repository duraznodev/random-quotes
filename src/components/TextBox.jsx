import React from "react";

export const TextBox = ({ text }) => {
  //   const quote = props.quote;
  //   const { quote } = props;
  return (
    <div className="flex justify-center text-2xl font-medium italic">
      <h2 id="text">"{text}"</h2>
    </div>
  );
};
