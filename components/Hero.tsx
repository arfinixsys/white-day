"use client";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-6">

      <img
        src="/images/cover.jpeg"
        className="w-64 h-64 object-cover rounded-3xl shadow-xl mb-8 hover:scale-105 transition"
      />

      <h1 className="text-3xl md:text-5xl font-semibold text-rose-400">
        Happy White Day, My Bby 🤍
      </h1>

      <button
        onClick={() => router.push("/message")}
        className="mt-8 px-8 py-3 bg-rose-200 rounded-full hover:scale-110 transition"
      >
        Open My Letter ✨
      </button>

    </div>
  );
}