import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-stone-800">Crafty Alpacas</Link>
        <div className="hidden md:flex gap-8 text-sm font-medium text-stone-600">
          <Link href="#experiences" className="hover:text-stone-700">Experiences</Link>
          <Link href="#workshops" className="hover:text-stone-700">Workshops</Link>
          <Link href="#shop" className="hover:text-stone-700">Shop</Link>
        </div>
        <Link href="#book" className="bg-stone-800 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-stone-900 transition">Book Now</Link>
      </nav>
    </header>
  );
}
