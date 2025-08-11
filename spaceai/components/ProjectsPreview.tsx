import Image from 'next/image';

export default function ProjectsPreview() {
  const projects = [
    { title: "Full Stack Development", image: "/images/about-three-1-1.png" },
    { title: "AI Analysis Tool", image: "/images/about-five-1-1.jpg" },
    { title: "E-commerce AI", image: "/images/about-five-1-2.jpg" },
  ];

  const ACCENT = '#16C4C9';
  const TEXT = '#203047';
  const SUB = '#334155';
  const CARD_BG = '#FFFFFF';
  const BTN_BG = '#203047';
  const BTN_TX = '#FFFFFF';

  return (
    <section className="py-20 px-6 text-center" style={{ backgroundColor: '#F9FAFB', color: TEXT }}>
      <h3 className="uppercase text-sm mb-2" style={{ color: ACCENT }}>
        Latest Projects
      </h3>
      <h2 className="text-3xl font-bold mb-12">
        Check Our AI-Driven Project Solutions
      </h2>

      <div className="flex justify-center gap-6 flex-wrap max-w-6xl mx-auto">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="w-72 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            style={{ backgroundColor: CARD_BG }}
          >
            <div className="relative w-full h-[180px]">
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-left">
              <h4 className="font-semibold text-lg mb-1">{proj.title}</h4>
              <p className="text-sm" style={{ color: SUB }}>
                Delivering robust, scalable, and innovative solutions tailored to client needs.
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="mt-10 px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition"
        style={{ backgroundColor: BTN_BG, color: BTN_TX }}
      >
        View All Projects
      </button>
    </section>
  );
}
