import Image from 'next/image'

export default function ProjectsPreview() {
  const projects = [
    { title: "Full Stack Development", image: "/images/proj1.png" },
    { title: "AI Analysis Tool", image: "/images/proj2.png" },
    { title: "E-commerce AI", image: "/images/proj3.png" },
  ];

  return (
    <section className="py-20 px-6 bg-white text-center">
      <h3 className="text-purple-700 uppercase text-sm mb-2">Latest Projects</h3>
      <h2 className="text-3xl font-semibold mb-12">Check We Have Solution Done Ai Projects</h2>
      <div className="flex justify-center gap-6 flex-wrap max-w-6xl mx-auto">
        {projects.map((proj, idx) => (
          <div key={idx} className="w-72 shadow-md rounded overflow-hidden">
            <Image src={proj.image} alt={proj.title} width={288} height={180} />
            <div className="p-4">
              <h4 className="font-semibold">{proj.title}</h4>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-10 bg-purple-700 text-white px-6 py-2 rounded-full">
        View All Projects
      </button>
    </section>
  );
}
