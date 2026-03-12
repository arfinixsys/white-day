"use client";
import { useEffect, useState } from "react";

const text =
  "Sebenernya aku gabut buat ini, tapi kalo misal aku gak ngasih apa apa di valentine kemaren, kan valentine harusnya kamu yang ngasih sksksksk, baru di white day ini aku yang ngasih. Maaf kalau misal aku buat seadanya dan tidak bagus, semoga bby suka, wopyu🤍";

export default function TypingText() {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplay(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <h2 className="text-xl md:text-2xl text-rose-400 max-w-xl leading-relaxed">
      {display}
    </h2>
  );
}