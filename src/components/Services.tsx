import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import {
  Sparkles,
  Droplets,
  Sun,
  Sofa,
  Trash2,
  HardHat,
} from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'Commercial Cleaning',
    description: 'Daily, nightly, and bespoke schedules for offices of every scale.',
    color: '#2E6FF2',
  },
  {
    icon: Droplets,
    title: 'Deep & Sanitisation',
    description: 'Hospital-grade disinfection for health-critical environments.',
    color: '#F2A93B',
  },
  {
    icon: Sun,
    title: 'Window & Facade',
    description: 'Streak-free glass and immaculate building exteriors at height.',
    color: '#16386B',
  },
  {
    icon: Sofa,
    title: 'Carpet & Floor Care',
    description: 'Deep extraction, polishing, and restorative floor treatments.',
    color: '#2E6FF2',
  },
  {
    icon: Trash2,
    title: 'Waste & Recycling',
    description: 'Sustainable haul-away, compactors, and zero-waste programs.',
    color: '#F2A93B',
  },
  {
    icon: HardHat,
    title: 'Post-Construction',
    description: 'Full debris removal and final finish cleaning for new builds.',
    color: '#16386B',
  },
]

function ServiceCard({ icon: Icon, title, description, color, index }: {
  icon: React.ElementType; title: string; description: string; color: string; index: number
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="group relative p-8 rounded-xl bg-white border border-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 pointer-events-auto"
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-4deg]"
        style={{ backgroundColor: `${color}10` }}
      >
        <Icon size={22} style={{ color }} />
      </div>
      <h3 className="text-lg font-bold font-heading text-navy-800 mb-2">{title}</h3>
      <p className="text-base text-slate-400 leading-relaxed">{description}</p>
      <div className="absolute inset-0 rounded-xl border border-transparent transition-all duration-300 group-hover:border-accent/20 pointer-events-none" />
    </motion.div>
  )
}

export default function Services() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 })

  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
            FM services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-navy-800 mt-4 leading-tight">
            Quality facility management in Brisbane
          </h2>
          <p className="text-slate-400 mt-4 text-lg leading-relaxed">
            From commercial cleaning to building maintenance — Leo FM provides trustworthy FM services near me for businesses across Queensland.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
