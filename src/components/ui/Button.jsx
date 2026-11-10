import React from 'react';

export default function Button({ children, onClick, variant = "primary", className = "" }) {
  const baseStyle = "px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2";
  const variants = {
    primary: "bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500",
    secondary: "bg-slate-200 text-slate-800 hover:bg-slate-300 focus:ring-slate-400",
    danger: "bg-rose-600 text-white hover:bg-rose-700 focus:ring-rose-500"
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}