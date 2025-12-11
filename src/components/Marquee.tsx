"use client";

import React from "react";

export default function Marquee() {
  const text = "pea tea? ";

  return (
    <div className="w-full max-w-[1200px] mx-auto overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <p className="text-[12px] font-normal tracking-wider">
          {text.repeat(50)}
        </p>
        <p className="text-[12px] font-normal tracking-wider">
          {text.repeat(50)}
        </p>
      </div>
    </div>
  );
}