import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import InkReveal from './ui/ink-reveal'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: "LEO FM transformed how we manage our corporate headquarters. Their responsiveness and attention to detail are unmatched.",
    name: 'Sarah Chen',
    company: 'Pacific Holdings Group',
    rating: 5,
  },
  {
    quote: "We've worked with three cleaning providers before LEO FM. The difference in quality, communication, and reliability is night and day.",
    name: 'Marcus Rivera',
    company: 'Atlas Healthcare Systems',
    rating: 5,
  },
  {
    quote: "Their transparent reporting and proactive maintenance saved us 30% in unexpected repair costs in the first year alone.",
    name: 'Emily Foster',
    company: 'Meridian Financial',
    rating: 5,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-ambert fill-ambert" />
      ))}
    </div>
  )
}

function TestimonialCard({ quote, name, company, rating, index }: {
  quote: string; name: string; company: string; rating: number; index: number
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
      className="p-8 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-gray-200/40 transition-all duration-300 hover:-translate-y-1 flex flex-col pointer-events-auto"
    >
      <Stars count={rating} />
      <blockquote className="mt-4 text-base text-slate-500 leading-relaxed flex-1">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="mt-6 pt-5 border-t border-gray-50">
        <div className="font-semibold text-base text-navy-800">{name}</div>
        <div className="text-sm text-slate-400 mt-0.5">{company}</div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 })

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <img src="/office6.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
      <InkReveal
        maskColor={[247, 248, 250]}
        maskOpacity={1}
        brushSize={160}
        className="absolute inset-0"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pointer-events-none" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
            Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-navy-800 mt-4 leading-tight">
            Trusted by industry leaders
          </h2>
          <p className="text-slate-400 mt-4 text-lg leading-relaxed">
            See what our clients say about partnering with LEO FM.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} {...t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
