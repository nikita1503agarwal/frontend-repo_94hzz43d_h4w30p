import React from 'react'
import { Sparkles } from 'lucide-react'

export default function ThreeDExtras() {
  return (
    <div className="pointer-events-none">
      {/* 3D floating gradient orbs */}
      <div className="fixed left-[-120px] top-24 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-400/40 via-sky-300/40 to-emerald-300/40 blur-3xl will-change-transform [transform:translateZ(0)] animate-[floatY_10s_ease-in-out_infinite]" />
      <div className="fixed right-[-120px] top-64 h-72 w-72 rounded-full bg-gradient-to-br from-sky-400/40 via-indigo-300/40 to-emerald-300/40 blur-3xl will-change-transform [transform:translateZ(0)] animate-[floatX_12s_ease-in-out_infinite]" />

      {/* 3D rotating rings */}
      <div className="fixed left-1/2 top-[60%] -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 [perspective:1000px]">
        <div className="absolute inset-0 rounded-full border border-indigo-400/30 [transform-style:preserve-3d] will-change-transform animate-[spinY_16s_linear_infinite]" />
        <div className="absolute inset-6 rounded-full border border-sky-400/30 [transform-style:preserve-3d] will-change-transform animate-[spinY_22s_linear_infinite]" />
        <div className="absolute inset-12 rounded-full border border-emerald-400/30 [transform-style:preserve-3d] will-change-transform animate-[spinY_28s_linear_infinite]" />
      </div>

      {/* Glow badge */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border border-white/40 bg-white/30 px-3 py-1.5 text-xs font-medium text-slate-700 backdrop-blur will-change-transform animate-[pulseGlow_3.8s_ease-in-out_infinite]">
        <Sparkles size={14} className="text-indigo-600" /> 3D enhanced
      </div>
    </div>
  )
}
