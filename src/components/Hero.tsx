import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Clock, Building2, Users } from 'lucide-react'
import { useCountUp } from '../hooks/useCountUp'
import { useMediaQuery } from '../hooks/useMediaQuery'
import InkReveal from './ui/ink-reveal'

const stats = [
  { icon: Building2, value: 500, suffix: '+', label: 'Facilities Managed', color: '#2E6FF2' },
  { icon: Clock, value: 24, suffix: '/7', label: 'Support', color: '#F2A93B' },
  { icon: Shield, value: 15, suffix: '+', label: 'Years Experience', color: '#16386B' },
  { icon: Users, value: 98, suffix: '%', label: 'Client Retention', color: '#2E6FF2' },
]

function StatItem({ icon: Icon, value, suffix, label, color }: {
  icon: React.ElementType; value: number; suffix: string; label: string; color: string
}) {
  const [hasAnimated, setHasAnimated] = useState(false)
  const count = useCountUp(value, 2200, 0, hasAnimated)

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById('stats-bar')
      if (!el || hasAnimated) return
      const rect = el.getBoundingClientRect()
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        setHasAnimated(true)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [hasAnimated])

  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${color}12` }}>
        <Icon size={18} style={{ color }} />
      </div>
      <div>
        <div className="text-lg font-bold text-navy-800 font-heading leading-none">
          {count}{suffix}
        </div>
        <div className="text-sm text-slate-400 font-medium mt-0.5">{label}</div>
      </div>
    </div>
  )
}

export default function Hero() {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
      <img src="/office.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
      {isDesktop && (
        <InkReveal
          maskColor={[247, 248, 250]}
          maskOpacity={0.9}
          brushSize={180}
          className="absolute inset-0"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/25 to-black/40 pointer-events-none z-[1]" />

      <div className="relative z-10 flex-1 flex flex-col pointer-events-none">
        <div className="flex-1 flex flex-col pt-28 lg:pt-32 pb-0">
          <div className="w-full flex-1 flex flex-col">
            <div className="relative flex-1 min-h-[420px] lg:min-h-[520px] flex items-center justify-center">
              <div className="text-center px-6 max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                  <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-white/70 bg-black/20 px-4 py-1.5 rounded-full mb-6 border border-white/10 backdrop-blur-sm pointer-events-auto">
                    Premium commercial cleaning
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-heading text-white leading-[1.05] tracking-[-0.03em] text-center max-w-4xl mx-auto pointer-events-auto"
                  style={{ textShadow: '0 4px 30px rgba(0,0,0,0.55)' }}
                >
                  Your facility,{' '}
                  <span className="text-accent">our mastery</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
                  className="text-base lg:text-lg text-white/80 max-w-xl mx-auto mt-5 leading-relaxed pointer-events-auto"
                  style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}
                >
                  From daily upkeep to deep sanitation — we deliver spotless, 
                  healthy environments that make your business shine.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
                  className="flex flex-wrap gap-4 mt-8 justify-center pointer-events-auto"
                >
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-base font-semibold rounded-lg hover:bg-accent-hover transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
                  >
                    Request a Quote
                    <ArrowRight size={18} />
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white text-base font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Our Services
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div id="stats-bar" className="max-w-7xl mx-auto px-6 lg:px-8 w-full pb-8 lg:pb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
            className="bg-white/90 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-white/30 px-8 py-5 pointer-events-auto"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1 + i * 0.1, ease: 'easeOut' }}
                >
                  <StatItem {...stat} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
