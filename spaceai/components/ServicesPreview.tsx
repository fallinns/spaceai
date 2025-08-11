import {
  FiCpu,
  FiGlobe,
  FiShield,
  FiPenTool,
  FiBarChart2,
} from "react-icons/fi";

export default function ServicesPreview() {
  const ACCENT = "#16C4C9";
  const CARD_BG = "#FFFFFF";
  const ICON_BG = "#E6F7F8";
  const TITLE_COLOR = "#203047";
  const DESC_COLOR = "#475569";
  const SECTION_BG = "#F9FAFB";

  const services = [
    {
      title: "Artificial Intelligence",
      desc: "AI-powered software and prototype development to solve real-world problems.",
      icon: <FiCpu size={32} style={{ color: ACCENT }} />,
    },
    {
      title: "Web Technologies",
      desc: "Design and development with cutting-edge web frameworks and stacks.",
      icon: <FiGlobe size={32} style={{ color: ACCENT }} />,
    },
    {
      title: "Security",
      desc: "Comprehensive security audits & penetration testing for maximum safety.",
      icon: <FiShield size={32} style={{ color: ACCENT }} />,
    },
    {
      title: "Graphic Design",
      desc: "UI/UX, video editing, and jewellery CAD designs that inspire.",
      icon: <FiPenTool size={32} style={{ color: ACCENT }} />,
    },
    {
      title: "Sales Automation & Marketing",
      desc: "Lead generation, automation, and data mining for smarter sales funnels.",
      icon: <FiBarChart2 size={32} style={{ color: ACCENT }} />,
    },
  ];

  return (
    <section
      className="py-24 px-6 text-center"
      style={{ backgroundColor: SECTION_BG }}
    >
      <h3
        className="uppercase text-sm font-medium mb-2 tracking-wider"
        style={{ color: ACCENT }}
      >
        Popular Services
      </h3>
      <h2
        className="text-4xl font-bold mb-16 leading-tight"
        style={{ color: TITLE_COLOR }}
      >
        We Provide Our Clients Best <br /> Software Solution Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="rounded-xl p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-2 hover:shadow-lg"
            style={{ backgroundColor: CARD_BG }}
          >
            <div
              className="w-14 h-14 mx-auto mb-6 rounded-full flex items-center justify-center"
              style={{ backgroundColor: ICON_BG }}
            >
              {service.icon}
            </div>
            <h4
              className="font-semibold text-lg mb-2"
              style={{ color: TITLE_COLOR }}
            >
              {service.title}
            </h4>
            <p
              className="text-sm"
              style={{ color: DESC_COLOR }}
            >
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
