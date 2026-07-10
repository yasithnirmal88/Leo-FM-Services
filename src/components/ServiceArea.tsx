import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { MapPin, Building2, Warehouse, Store } from 'lucide-react'

const locations = [
  'Brisbane CBD', 'Fortitude Valley', 'South Brisbane', 'Spring Hill',
  'Newstead', 'Bowen Hills', 'Milton', 'Paddington', 'Toowong',
  'West End', 'Kangaroo Point', 'Hamilton', 'Albion', 'Woolloongabba',
  'Indooroopilly', 'Chermside', 'Carindale', 'Mount Gravatt',
]
const services = [
  'Commercial Office Cleaning',
  'Strata & Body Corporate Cleaning',
  'Healthcare Facility Sanitisation',
  'Industrial & Warehouse Cleaning',
  'Retail & Hospitality Cleaning',
  'Educational Facility Maintenance',
]

export default function ServiceArea() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 })

  return (
    <section id="service-area" className="py-24 lg:py-32 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
            Service area
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-navy-800 mt-4 leading-tight">
            Facility management across Brisbane &amp; South East Queensland
          </h2>
          <p className="text-slate-400 mt-4 text-lg leading-relaxed">
            LEO FM provides premium commercial cleaning, building maintenance and facility management to businesses throughout Brisbane and surrounding suburbs. Our local teams respond fast, backed by a dedicated account manager.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            <h3 className="text-xl font-bold font-heading text-navy-800 mb-6 flex items-center gap-3">
              <MapPin size={20} className="text-accent" />
              Suburbs we serve
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {locations.map((loc) => (
                <div key={loc} className="flex items-center gap-2 text-base text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
                  {loc}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <h3 className="text-xl font-bold font-heading text-navy-800 mb-6 flex items-center gap-3">
              <Building2 size={20} className="text-accent" />
              Facility types we service
            </h3>
            <div className="space-y-4">
              {services.map((svc) => (
                <div key={svc} className="flex items-center gap-3 text-base text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-accent/60 shrink-0" />
                  {svc}
                </div>
              ))}
            </div>
            <p className="mt-6 text-base text-slate-400 leading-relaxed">
              Not in this list? <a href="#contact" className="text-accent hover:underline">Get in touch</a> — our team can service most areas across South East Queensland.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
