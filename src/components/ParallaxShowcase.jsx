import React from 'react'

export default function ParallaxShowcase() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Immersive Learning Environments
          </h2>
          <p className="mt-3 text-slate-600">Layers with depth, motion, and playful parallax for a sense of space.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3 [perspective:1200px]">
          {[
            { t: 'Innovation Lab', c: 'from-indigo-500 to-sky-500' },
            { t: 'Green Studio', c: 'from-emerald-500 to-teal-500' },
            { t: 'XR Theater', c: 'from-fuchsia-500 to-indigo-500' },
          ].map((item, i) => (
            <div key={i} className="group relative h-64 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
              <div className={`absolute inset-0 bg-gradient-to-br ${item.c} opacity-80`}/>
              <div className="absolute inset-0 opacity-15 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, white 2px, transparent 2px)', backgroundSize: '16px 16px' }} />

              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
              <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" />

              <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white [transform-style:preserve-3d]">
                <h3 className="text-xl font-semibold drop-shadow">{item.t}</h3>
                <p className="text-sm opacity-90 drop-shadow">Collaborate, prototype, and present in spaces designed for modern creation.</p>
                <div className="mt-3 h-10 w-10 rounded-lg bg-white/20 backdrop-blur border border-white/30 [transform:translateZ(40px)]" />
              </div>

              <div className="absolute inset-x-0 bottom-0 h-24 translate-y-6 bg-white/40 backdrop-blur-md [transform:translateZ(20px)] transition-all group-hover:translate-y-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
