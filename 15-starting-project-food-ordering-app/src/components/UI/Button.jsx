import React from "react";

export default function Button({ children, textOnly, className, ...props }) {
  const css = `${textOnly ? "text-button" : "button"} ${className}`;

  return (
    <button className={css} {...props}>
      {children}
    </button>
  );
}
