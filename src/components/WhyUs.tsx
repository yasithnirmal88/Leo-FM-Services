import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { CheckCircle2 } from 'lucide-react'

const reasons = [
  {
    title: 'Certified Technicians',
    description: 'Every team member holds industry certifications and undergoes continuous training.',
  },
  {
    title: 'Rapid Response SLA',
    description: 'Guaranteed 4-hour response for urgent cleaning and facility issues.',
  },
  {
    title: 'Transparent Reporting',
    description: 'Real-time dashboards and monthly reviews — full visibility, no surprises.',
  },
  {
    title: 'Sustainable Practices',
    description: 'Green cleaning products, water-efficient methods, and waste-reduction programs.',
  },
]

function ReasonItem({ title, description, index }: {
  title: string; description: string; index: number
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
      className="flex gap-4"
    >
      <div className="mt-0.5 shrink-0">
        <CheckCircle2 size={22} className="text-accent" />
      </div>
      <div>
        <h3 className="text-base font-bold text-navy-800 font-heading">{title}</h3>
        <p className="text-base text-slate-400 mt-1 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

export default function WhyUs() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 })

  return (
    <section id="why-us" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                Why LEO FM
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading text-navy-800 mt-4 leading-tight">
                Built different.{' '}
                <span className="text-accent">Built better.</span>
              </h2>
              <p className="text-slate-400 mt-4 text-lg leading-relaxed max-w-md">
                We don't just clean buildings — we elevate how they feel, 
                function, and reflect your brand.
              </p>
            </motion.div>

            <div className="mt-10 space-y-6">
              {reasons.map((reason, i) => (
                <ReasonItem key={reason.title} {...reason} index={i} />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/hotel.png"
                alt="Luxury hotel interior — LEO FM commercial cleaning and facility management"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navy-800/30 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
              <svg
                className="absolute bottom-0 right-0 w-3/4 h-3/4 opacity-10"
                viewBox="0 0 300 300"
                fill="none"
              >
                <path d="M300 0L150 300H0L150 0H300Z" fill="white" />
                <path d="M220 0L110 300H40L150 0H220Z" fill="white" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
