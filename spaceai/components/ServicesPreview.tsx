import {
  FiCpu,
  FiGlobe,
  FiShield,
  FiPenTool,
  FiBarChart2,
} from "react-icons/fi";

export default function ServicesPreview() {
  const services = [
    {
      title: "Artificial Intelligence",
      desc: "Ai based software & prototype development",
      icon: <FiCpu size={32} className="text-purple-600" />,
    },
    {
      title: "Web Technologies",
      desc: "Design & development with multiple Technologies",
      icon: <FiGlobe size={32} className="text-purple-600" />,
    },
    {
      title: "Security",
      desc: "Security audit & Penetration testing",
      icon: <FiShield size={32} className="text-purple-600" />,
    },
    {
      title: "Graphic Design",
      desc: "Providing UI-UX Design, Video editing, Jewellery CAD Designs",
      icon: <FiPenTool size={32} className="text-purple-600" />,
    },
    {
      title: "Sales automation & Marketing",
      desc: "Data mining & automation, Lead generation",
      icon: <FiBarChart2 size={32} className="text-purple-600" />,
    },
  ];

  return (
    <section className="bg-[#fbf7ff] py-24 px-6 text-center">
      <h3 className="text-[#a259ff] uppercase text-sm font-medium mb-2 tracking-wider">
        Popular Services
      </h3>
      <h2 className="text-4xl font-bold mb-16 leading-tight text-gray-900">
        We Provide Our Clients Best <br /> Software Solution Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="w-14 h-14 mx-auto mb-6 bg-[#f6edff] rounded-full flex items-center justify-center">
              {service.icon}
            </div>
            <h4 className="font-semibold text-lg text-gray-900 mb-2">{service.title}</h4>
            <p className="text-sm text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
