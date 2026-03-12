import TypingText from "@/components/TypingText";

export default function Message() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-center p-6">
      <TypingText />

      <a
        href="/gallery"
        className="mt-10 bg-rose-200 px-6 py-3 rounded-full"
      >
        Foto foto kamuuuu →
      </a>
    </main>
  );
}