import React from 'react';

export default function Card({ children, borderColor = "border-slate-200", className = "" }) {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-sm border-2 ${borderColor} ${className}`}>
      {children}
    </div>
  );
}