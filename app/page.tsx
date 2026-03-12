import Hero from "@/components/Hero";
import FallingFlowers from "@/components/FallingFlowers";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-white to-rose-50 overflow-hidden">
      <FallingFlowers />
      <Hero />
    </main>
  );
}