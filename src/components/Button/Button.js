import React from "react";

export default function Button({ children, onClick }) {
  return (
    <button onClick={onClick} style={{ backgroundColor: "yellow" }}>
      {children}
    </button>
  );
}
