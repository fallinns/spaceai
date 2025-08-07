export default function ServicesPreview() {
  const services = [
    { title: "AI & ML Intelligence", desc: "Automated intelligent tools.", icon: "🤖" },
    { title: "Web Development", desc: "Frontend and backend solutions.", icon: "🌐" },
    { title: "Security & Protection", desc: "Cybersecurity strategies.", icon: "🔐" },
    { title: "Graphic Design", desc: "Branding & UI/UX expertise.", icon: "🎨" },
    { title: "Data Science Automation", desc: "Decision-making automation.", icon: "📊" },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 text-center">
      <h3 className="text-purple-700 uppercase text-sm mb-2">Popular Services</h3>
      <h2 className="text-3xl font-semibold mb-12">We Provide Our Clients Best Software Solution Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h4 className="font-semibold mb-2">{service.title}</h4>
            <p className="text-sm text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
