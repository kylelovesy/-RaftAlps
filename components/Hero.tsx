'use client';
import {motion} from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative py-24 md:py-40 overflow-hidden">
      <Image
        src="https://picsum.photos/seed/alpaca-farm/1920/1080?blur=2"
        alt="Alpaca Farm in Monmouthshire"
        fill
        className="object-cover -z-10"
        priority
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-slate-900/40 -z-10" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          className="max-w-3xl text-white"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Alpaca Experiences, Craft Workshops & Eco Gifts
          </h1>
          <p className="text-xl mb-10 leading-relaxed text-slate-100">
            Get hands-on with friendly alpacas, learn new skills, and discover sustainable alpaca wool crafts on our family-run farm in South Wales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#book" className="bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-amber-800 transition text-center">Book Your Alpaca Experience</Link>
            <Link href="#workshops" className="bg-stone-900/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border border-stone-900/20 hover:bg-stone-900/20 transition text-center">View Workshops</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
