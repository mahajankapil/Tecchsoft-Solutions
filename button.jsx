import React from 'react'

export function Button({ children, variant = "default", size = "md", className, ...props }) {
  let base = "px-3 py-2 rounded-lg font-medium";
  let styles = "";

  if (variant === "outline") styles = "border border-gray-400 text-gray-700 hover:bg-gray-100";
  else styles = "bg-blue-600 text-white hover:bg-blue-700";

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  )
}