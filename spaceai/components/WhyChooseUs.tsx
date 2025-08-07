export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <h3 className="text-purple-700 uppercase text-sm mb-2">Company Benefits</h3>
      <h2 className="text-3xl font-semibold mb-6">Why You Should Choose Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left mt-12">
        <div className="p-6 border rounded shadow">
          <h4 className="font-bold text-lg mb-2">🌩️ Cloud Based Services</h4>
          <p className="text-sm text-gray-600">Quick deployment & high uptime via secure cloud solutions.</p>
        </div>
        <div className="p-6 border rounded shadow">
          <h4 className="font-bold text-lg mb-2">🧠 Expert Team Members</h4>
          <p className="text-sm text-gray-600">AI engineers, designers, and product managers working in sync.</p>
        </div>
      </div>
    </section>
  );
}
