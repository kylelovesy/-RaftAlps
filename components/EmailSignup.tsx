'use client';
import {useState} from 'react';

export default function EmailSignup() {
  const [email, setEmail] = useState('');

  return (
    <section className="py-20 bg-stone-900 text-stone-50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Craft Newsletter</h2>
        <p className="text-stone-200 mb-10 text-lg">Get exclusive workshop updates, alpaca news, and special offers directly in your inbox.</p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address" 
            className="px-6 py-4 rounded-xl text-stone-900 w-full sm:w-80"
          />
          <button className="bg-amber-600 text-stone-950 px-8 py-4 rounded-xl font-semibold hover:bg-amber-500 transition">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
