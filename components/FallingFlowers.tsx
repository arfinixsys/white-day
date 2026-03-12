"use client";
import { useEffect } from "react";

export default function FallingFlowers() {
  useEffect(() => {
    const interval = setInterval(() => {
      const flower = document.createElement("div");
      flower.innerHTML = "🤍";
      flower.className = "fixed text-xl animate-pulse";
      flower.style.left = Math.random()*100+"vw";
      flower.style.top = "-20px";

      document.body.appendChild(flower);

      setTimeout(()=>flower.remove(),6000);
    },800);

    return ()=>clearInterval(interval);
  },[]);

  return null;
}