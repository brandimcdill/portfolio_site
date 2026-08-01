import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-brandBg text-gray-300 font-sans antialiased selection:bg-purple-500/30">
      
      {/* 1. Header Navigation Container */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="font-serif tracking-widest text-sm uppercase text-gray-400">
          YOURNAME
        </div>
        <nav className="flex gap-8 text-xs tracking-widest uppercase text-gray-400">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#work" className="hover:text-white transition">Work</a>
          <a href="#content" className="hover:text-white transition">Content</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
      </header>

      {/* 2. Main Hero Dynamic Grid Split */}
      <main className="max-w-7xl mx-auto px-6 pt-20 pb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Typography & Copywriting */}
        <section className="lg:col-span-7 space-y-8">
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-purple-500/50"></span>
            <span className="text-xs uppercase tracking-widest text-purple-400 font-medium">
              Full-Stack Developer · Creator
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-serif text-white leading-[1.15]">
            Where beauty <br />
            meets the code <br />
            behind it.
          </h1>
          
          <p className="max-w-md text-gray-400 text-sm leading-relaxed">
            I build elegant, functional web experiences — and explore the intersection 
            of technology and beauty culture. Available for freelance projects.
          </p>
          
          <div className="flex gap-4 pt-4">
            <button className="bg-white text-black px-6 py-3 text-xs tracking-wider uppercase font-semibold hover:bg-gray-200 transition">
              View My Work
            </button>
            <button className="border border-gray-600 text-white px-6 py-3 text-xs tracking-wider uppercase font-semibold hover:bg-white/5 transition">
              Let's Connect
            </button>
          </div>
        </section>

        {/* Right Side: The Currently Building Feature Card */}
        <section className="lg:col-span-5">
          <div className="bg-brandCard border border-brandBorder p-8 rounded-2xl shadow-xl space-y-6">
            <div>
              <span className="text-[10px] tracking-widest text-purple-400 uppercase font-semibold">
                Currently Building With
              </span>
              <h2 className="text-xl font-serif text-white mt-1">Full-Stack Development</h2>
            </div>
            
            <p className="text-xs text-gray-400 leading-relaxed">
              Crafting products from database to user interface—with an eye for aesthetics 
              that most engineers overlook.
            </p>

            {/* Badges/Tags container */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'Express', 'Tailwind'].map((tech) => (
                <span key={tech} className="text-[11px] bg-purple-950/60 text-purple-200 px-3 py-1 rounded-full border border-purple-900/40">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}