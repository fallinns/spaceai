export default function StatsBanner() {
  const stats = [
    { label: "Successful Integrations", value: 151 },
    { label: "Strategies Planned", value: 127 },
    { label: "Projects Delivered", value: 36 },
    { label: "Satisfied Clients", value: 68 },
  ];

  return (
    <section className="bg-purple-700 text-white py-16 px-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <p className="text-4xl font-bold">{stat.value}</p>
            <p className="text-sm mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
