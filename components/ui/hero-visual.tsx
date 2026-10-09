import React from 'react';
import { 
  Calculator, 
  Scale, 
  FileCheck2, 
  TrendingUp, 
  ShieldCheck 
} from 'lucide-react';

export function HeroVisual() {
  return (
    <div className="relative w-full h-full bg-white overflow-hidden flex items-center justify-center font-sans">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: 'linear-gradient(var(--tw-colors-navy) 1px, transparent 1px), linear-gradient(90deg, var(--tw-colors-navy) 1px, transparent 1px)', 
          backgroundSize: '24px 24px' 
        }} 
      />
      
      {/* Ambient Glows */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-emerald/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute -bottom-1/4 -right-1/4 w-96 h-96 bg-mint/30 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Central Hub */}
      <div className="relative z-10 flex items-center justify-center">
        <div className="absolute w-32 h-32 rounded-full border border-emerald/20 animate-[spin_10s_linear_infinite]" />
        <div className="absolute w-48 h-48 rounded-full border border-dashed border-emerald/20 animate-[spin_15s_linear_infinite_reverse]" />
        
        <div className="relative w-20 h-20 rounded-2xl bg-linear-to-br from-emerald to-emerald-ink border border-emerald/20 flex items-center justify-center shadow-[0_8px_30px_rgba(20,184,166,0.2)]">
          <ShieldCheck className="w-10 h-10 text-white" strokeWidth={1.5} />
        </div>
      </div>

      {/* Orbiting Elements */}
      
      {/* Top Left - Tax */}
      <div className="absolute top-[15%] left-[15%] animate-[bounce_4s_ease-in-out_infinite]">
        <div className="flex items-center gap-3 p-2 rounded-xl bg-white/80 backdrop-blur-md border border-line shadow-sm">
          <div className="w-10 h-10 rounded-lg bg-emerald/10 flex items-center justify-center text-emerald">
            <Calculator className="w-5 h-5" />
          </div>
          <div className="hidden sm:block pr-2">
            <div className="text-[10px] text-navy/50 font-medium uppercase tracking-wider">Taxation</div>
            <div className="text-sm text-navy font-semibold">Optimized</div>
          </div>
        </div>
      </div>

      {/* Top Right - Legal */}
      <div className="absolute top-[20%] right-[10%] animate-[bounce_5s_ease-in-out_infinite]" style={{ animationDelay: '0.5s' }}>
        <div className="flex items-center gap-3 p-2 rounded-xl bg-white/80 backdrop-blur-md border border-line shadow-sm">
          <div className="w-10 h-10 rounded-lg bg-mint/40 flex items-center justify-center text-emerald-ink">
            <Scale className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Bottom Left - Compliance */}
      <div className="absolute bottom-[20%] left-[10%] animate-[bounce_4.5s_ease-in-out_infinite]" style={{ animationDelay: '1s' }}>
        <div className="flex items-center gap-3 p-2 rounded-xl bg-white/80 backdrop-blur-md border border-line shadow-sm">
          <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center text-navy">
            <FileCheck2 className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Bottom Right - Growth */}
      <div className="absolute bottom-[15%] right-[15%] animate-[bounce_5.5s_ease-in-out_infinite]" style={{ animationDelay: '1.5s' }}>
        <div className="flex items-center gap-3 p-2 rounded-xl bg-white/80 backdrop-blur-md border border-line shadow-sm">
          <div className="hidden sm:block pl-2 text-right">
            <div className="text-[10px] text-navy/50 font-medium uppercase tracking-wider">Growth</div>
            <div className="text-sm text-navy font-semibold">+124%</div>
          </div>
          <div className="w-10 h-10 rounded-lg bg-emerald/10 flex items-center justify-center text-emerald">
            <TrendingUp className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Floating Data Nodes */}
      <div className="absolute top-[40%] right-[25%] w-2 h-2 rounded-full bg-emerald animate-ping" />
      <div className="absolute bottom-[40%] left-[25%] w-2 h-2 rounded-full bg-mint animate-ping" style={{ animationDelay: '2s' }} />
    </div>
  );
}
