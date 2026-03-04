import {Leaf, Users, ShoppingBag} from 'lucide-react';

const features = [
  {
    title: 'Alpaca Experiences',
    description: 'Get up close to friendly alpacas on our Monmouthshire farm. Hands-on fun for all ages.',
    icon: Users,
  },
  {
    title: 'Craft Workshops',
    description: 'Learn weaving and fibre crafts using our own alpaca wool. Perfect for beginners.',
    icon: Leaf,
  },
  {
    title: 'Eco-Friendly Shop',
    description: 'Browse our on-farm shop for soft alpaca scarves and sustainable gifts.',
    icon: ShoppingBag,
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div key={feature.title} className="p-8 rounded-2xl border border-stone-100 hover:border-amber-100 hover:shadow-lg transition">
              <feature.icon className="w-10 h-10 text-amber-700 mb-6" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-stone-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
