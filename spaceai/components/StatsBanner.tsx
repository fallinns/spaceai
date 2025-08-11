type Mode = 'light' | 'dark';

export default function StatsBanner({ mode = 'light' }: { mode?: Mode }) {
  const stats = [
    { label: 'Successful Integrations', value: 151 },
    { label: 'Strategies Planned', value: 127 },
    { label: 'Projects Delivered', value: 36 },
    { label: 'Satisfied Clients', value: 68 },
  ];

  // LaunchCrew-style theme tokens
  const isDark = mode === 'dark';
  const BG     = isDark ? '#0B1E2D' : '#16C4C9';
  const VALUE  = isDark ? '#16C4C9' : '#0B1E2D';
  const LABEL  = isDark ? '#E4E9EE' : '#0B1E2D';
  const GRID_BG= isDark ? 'transparent' : 'transparent';

  return (
    <section className="py-16 px-6" style={{ backgroundColor: BG }}>
      <div
        className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto text-center"
        style={{ backgroundColor: GRID_BG }}
      >
        {stats.map((stat, idx) => (
          <div key={idx}>
            <p
              className="text-4xl font-extrabold leading-none"
              style={{ color: VALUE }}
            >
              {stat.value}
            </p>
            <p
              className="text-sm mt-2 font-medium"
              style={{ color: LABEL }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
