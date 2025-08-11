export default function ClientsLogo() {
  const logos = ['client-1-2.png', 'client-1-3.png', 'client-1-4.png', 'client-1-5.png', 'client-1-6.png', 'client-1-7.png', 'client-1-8.png', 'client-1-9.png', 'client-1-10.png', , 'client-1-11.png', 'client-1-12.png'];

  return (
    <section className="py-12 px-6 bg-white text-center">
      <div className="flex justify-center gap-12 items-center flex-wrap">
        {logos.map((logo, idx) => (
          <img
            key={idx}
            src={`/images/${logo}`}
            alt={`Client ${idx}`}
            className="h-10 opacity-70 hover:opacity-100 transition"
          />
        ))}
      </div>
    </section>
  );
}
