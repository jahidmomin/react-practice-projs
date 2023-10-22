import React from "react";

export default function Button({
  chidren,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-2 py-2 rounded-lg ${className} ${bgColor} ${textColor}`}
      {...props}
    >
      {chidren}
    </button>
  );
}
