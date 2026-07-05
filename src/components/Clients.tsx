import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Building2, Hospital, Factory, Warehouse, Monitor, Globe } from 'lucide-react'

const clients = [
  { icon: Building2, name: 'Meridian Financial' },
  { icon: Hospital, name: 'Atlas Healthcare' },
  { icon: Factory, name: 'Pacific Industries' },
  { icon: Warehouse, name: 'Summit Logistics' },
  { icon: Monitor, name: 'Nexus Technologies' },
  { icon: Globe, name: 'GlobalEdge Corp' },
]

export default function Clients() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section className="py-20 lg:py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-sm font-semibold tracking-[0.2em] uppercase text-slate-400 mb-10"
        >
          Trusted by leading organizations
        </motion.p>

        <div className="grid grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 items-center justify-items-center">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' }}
              className="flex items-center gap-2 text-slate-300 hover:text-slate-400 transition-colors duration-200"
            >
              <client.icon size={20} />
              <span className="text-sm font-semibold tracking-wide whitespace-nowrap">{client.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
