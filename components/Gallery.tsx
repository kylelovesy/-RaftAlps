import Image from 'next/image';

const galleryItems = [
  {
    title: 'Meet the Herd',
    description: 'Interact with our friendly alpacas.',
    image: 'https://picsum.photos/seed/alpaca-herd/800/600',
  },
  {
    title: 'Learn to Weave',
    description: 'Hands-on craft workshops.',
    image: 'https://picsum.photos/seed/weaving-workshop/800/600',
  },
  {
    title: 'Eco-Friendly Shop',
    description: 'Handcrafted alpaca gifts.',
    image: 'https://picsum.photos/seed/alpaca-shop/800/600',
  },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Discover Crafty Alpacas</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div key={item.title} className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
