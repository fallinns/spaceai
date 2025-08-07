export default function ClientsLogo() {
  const logos = ['slider-1-1.jpg', 'cta-two-bg-1-1.jpg', 'about-five-1-2.jpg'];

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
