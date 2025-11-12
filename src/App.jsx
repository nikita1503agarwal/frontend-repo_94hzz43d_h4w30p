import React, { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { GraduationCap, BookOpen, Users, Compass, ArrowRight, CalendarDays, Sparkles } from 'lucide-react'
import ParallaxShowcase from './components/ParallaxShowcase'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/60 shadow-sm' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-slate-900">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400 shadow-inner" />
          <span className="tracking-tight">Hillsinai College</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-slate-700">
          <a href="#programs" className="hover:text-slate-900 transition-colors">Programs</a>
          <a href="#campus" className="hover:text-slate-900 transition-colors">Campus</a>
          <a href="#admissions" className="hover:text-slate-900 transition-colors">Admissions</a>
          <a href="#events" className="hover:text-slate-900 transition-colors">Events</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#admissions" className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition">
            Apply Now <ArrowRight size={16} />
          </a>
          <a href="#visit" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800 transition">
            Visit Campus
          </a>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-slate-50" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-20 h-[500px] w-[500px] rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 h-[500px] w-[500px] rounded-full bg-sky-200/40 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pt-28 sm:px-6 md:grid-cols-2 lg:gap-16">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur">
            <Sparkles size={14} className="text-indigo-600" />
            Technology • Environment • Future-ready
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Welcome to Hillsinai College
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            A forward-thinking community where innovation meets education. Explore interactive learning, sustainable initiatives, and a vibrant campus life.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#programs" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 transition">
              Explore Programs <ArrowRight size={18} />
            </a>
            <a href="#visit" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-slate-700 hover:bg-slate-50 transition">
              Book a Tour
            </a>
          </div>
          <div className="flex items-center gap-6 pt-2 text-sm text-slate-500">
            <div className="flex items-center gap-2"><Users size={16} /> 10k+ Students</div>
            <div className="flex items-center gap-2"><CalendarDays size={16} /> Est. 1968</div>
            <div className="flex items-center gap-2"><Compass size={16} /> Green Campus</div>
          </div>
        </div>

        {/* 3D Spline Scene */}
        <div className="relative h-[420px] w-full sm:h-[520px] lg:h-[620px]">
          <div className="absolute inset-0 rounded-3xl border border-white/40 bg-white/20 shadow-xl backdrop-blur-xl" />
          <div className="relative h-full w-full overflow-hidden rounded-3xl">
            <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}

function TiltCard({ icon: Icon, title, description, color }) {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-transparent via-white/60 to-transparent opacity-0 blur transition-opacity group-hover:opacity-100" />
      <div className="relative h-full transform-gpu rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm transition-transform duration-300 [transform-style:preserve-3d] group-hover:-translate-y-1 group-hover:[rotateX(6deg)] group-hover:[rotateY(-6deg)]">
        <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${color} text-white shadow-lg shadow-black/10`}>
          <Icon size={24} />
        </div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
      </div>
    </div>
  )
}

function Programs() {
  return (
    <section id="programs" className="relative py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-300/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Featured Programs</h2>
          <p className="mt-3 text-slate-600">Interdisciplinary pathways that blend technology, sustainability, and human-centered design.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <TiltCard
            icon={GraduationCap}
            title="Computer Science & AI"
            description="Hands-on projects, research labs, and ethical AI foundations to build the future responsibly."
            color="bg-indigo-600"
          />
          <TiltCard
            icon={BookOpen}
            title="Environmental Studies"
            description="Explore climate science, renewable systems, and sustainable urban planning in living labs."
            color="bg-emerald-600"
          />
          <TiltCard
            icon={Compass}
            title="Digital Design"
            description="Blend 3D, interaction, and experience design to craft immersive learning interfaces."
            color="bg-sky-600"
          />
        </div>
      </div>
    </section>
  )
}

function Campus() {
  return (
    <section id="campus" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">A campus built for exploration</h2>
            <p className="mt-4 text-slate-600">
              From collaborative studios to green rooftops and innovation hubs, our campus invites curiosity and creativity. Join communities, build projects, and shape impact.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <li className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm">Smart classrooms with interactive labs</li>
              <li className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm">Makerspaces and 3D printing studios</li>
              <li className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm">Eco-gardens and renewable energy projects</li>
              <li className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm">Clubs, hackathons, and design jams</li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative h-[360px] w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.12),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(56,189,248,0.12),transparent_50%)]" />
              <div className="absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-indigo-400/30 to-emerald-400/30 blur-2xl" />
              </div>
              <div className="relative h-full w-full p-6">
                {/* Faux 3D gallery */}
                <div className="grid h-full grid-cols-3 gap-4 [perspective:1000px]">
                  {[0,1,2,3,4,5].map((i) => (
                    <div key={i} className="relative col-span-1 overflow-hidden rounded-2xl border border-white/60 bg-white/40 shadow backdrop-blur [transform-style:preserve-3d] hover:[transform:rotateX(6deg)_rotateY(-6deg)_translateZ(8px)] transition-transform">
                      <div className="h-28 bg-gradient-to-br from-indigo-300/60 to-sky-300/60" />
                      <div className="p-3 text-xs text-slate-700">Studio {i+1}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Admissions() {
  return (
    <section id="admissions" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="col-span-2 p-8 sm:p-12">
              <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Ready to take the next step?</h3>
              <p className="mt-3 max-w-xl text-slate-600">Applications are open for the Fall intake. Scholarships available for outstanding academic and community impact.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-white hover:bg-slate-800 transition">Start Application <ArrowRight size={18} /></a>
                <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-slate-700 hover:bg-slate-50 transition">Download Prospectus</a>
              </div>
            </div>
            <div className="relative h-64 overflow-hidden md:h-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-emerald-500" />
              <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, white 2px, transparent 2px)', backgroundSize: '16px 16px' }} />
              <div className="relative flex h-full items-center justify-center p-8 text-white">
                <div className="rounded-2xl border border-white/30 bg-white/10 p-5 backdrop-blur">
                  <div className="flex items-center gap-3"><GraduationCap /> <span className="font-semibold">Scholarships • Grants • Aid</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400" />
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} Hillsinai College. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-600">
            <a className="hover:text-slate-900" href="#">Privacy</a>
            <a className="hover:text-slate-900" href="#">Terms</a>
            <a className="hover:text-slate-900" href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <ParallaxShowcase />
      <Programs />
      <Campus />
      <Admissions />
      <Footer />
    </div>
  )
}
