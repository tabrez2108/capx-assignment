"use client";

import React from "react";

interface CurvedUserNameProps {
  text: string;
  maxChars?: number;
  radius?: number;
  fontSize?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  className?: string; // allow Tailwind or custom classes
}

const CurvedUserName: React.FC<CurvedUserNameProps> = ({
  text,
  maxChars = 25,
  radius = 100,
  fontSize = 16,
  fill = "#fff",
  stroke = "#000",
  strokeWidth = 2,
  className,
}) => {
  // Truncate if needed
  const truncated =
    text.length > maxChars ? text.slice(0, maxChars) + "…" : text;

  // Fixed viewBox for responsiveness
  const width = 400;
  const height = 220;

  const cx = width / 2;
  const cy = height / 2;
  const leftX = cx - radius;
  const rightX = cx + radius;

  // Top arc
  const arcPath = `M${leftX},${cy} A${radius},${radius} 0 0 0 ${rightX},${cy}`;

  return (
    <svg
      className={`w-full ${className}`}
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      height="auto"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <path id="topArc" d={arcPath} />
      </defs>

      <text
        fontFamily="sans-serif"
        fontSize={fontSize}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        paintOrder="stroke"
      >
        <textPath href="#topArc" startOffset="50%" textAnchor="middle">
          {truncated}
        </textPath>
      </text>
    </svg>
  );
};

export default CurvedUserName;
