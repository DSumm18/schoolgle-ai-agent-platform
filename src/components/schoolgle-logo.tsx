import React from "react";

interface SchoolgleLogoProps {
  className?: string;
}

export function SchoolgleLogo({ className }: SchoolgleLogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-schoolgle-primary"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
      </svg>
      <span className="ml-2 font-bold text-schoolgle-primary">Schoolgle</span>
    </div>
  );
}