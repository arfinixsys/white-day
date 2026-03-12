export default function Gallery() {
  const photos = ["foto1.jpeg","foto2.jpeg","foto3.jpeg","foto4.jpeg","foto5.jpeg"];

  return (
    <main className="min-h-screen bg-rose-50 p-10">
      <h1 className="text-center text-3xl text-rose-400 mb-10">
        My favorite delicious gorgeous fineshyt gweh 🤍
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {photos.map((p,i)=>(
          <img
            key={i}
            src={`/images/${p}`}
            className="rounded-2xl shadow-lg hover:scale-105 transition"
          />
        ))}
      </div>
    </main>
  );
}