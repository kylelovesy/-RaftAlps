export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Crafty Alpacas. All rights reserved.</p>
        <p className="mt-2">Monmouthshire, South Wales</p>
      </div>
    </footer>
  );
}
