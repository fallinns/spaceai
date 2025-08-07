import Image from 'next/image'

export default function Testimonials() {
  const feedback = [
    {
      name: 'Hamilton Bowen',
      text: 'Choosing Planetoid was our best decision — from planning to deployment, they nailed everything.',
      image: '/images/client1.png',
    },
    {
      name: 'Chioma Adesiki',
      text: 'The impact of their AI solutions transformed how we operate and analyze our data.',
      image: '/images/client2.png',
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 text-center">
      <h3 className="text-purple-700 uppercase text-sm mb-2">Our Clients</h3>
      <h2 className="text-3xl font-semibold mb-12">We Are Trusted Worldwide Peoples</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {feedback.map((item, idx) => (
          <div key={idx} className="bg-white p-6 shadow rounded text-left">
            <div className="flex gap-4 items-center mb-4">
              <Image src={item.image} alt={item.name} width={60} height={60} className="rounded-full" />
              <div>
                <p className="font-bold">{item.name}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">“{item.text}”</p>
          </div>
        ))}
      </div>
    </section>
  );
}
