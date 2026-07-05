import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useCountUp } from '../hooks/useCountUp'
import { Building2, Clock, Shield, Users } from 'lucide-react'

const items = [
  { icon: Building2, value: 500, suffix: '+', label: 'Facilities Managed' },
  { icon: Users, value: 200, suffix: '+', label: 'Enterprise Clients' },
  { icon: Shield, value: 99, suffix: '%', label: 'Uptime Achievement' },
  { icon: Clock, value: 15, suffix: '+', label: 'Years of Excellence' },
]

function StatItem({ icon: Icon, value, suffix, label, isVisible }: {
  icon: React.ElementType; value: number; suffix: string; label: string; isVisible: boolean
}) {
  const count = useCountUp(value, 2200, 0, isVisible)

  return (
    <div className="text-center">
      <div className="w-14 h-14 rounded-2xl bg-white/8 backdrop-blur-sm flex items-center justify-center mx-auto mb-5">
        <Icon size={24} className="text-white/70" />
      </div>
      <div className="text-4xl lg:text-5xl font-bold font-heading text-white">
        {count}{suffix}
      </div>
      <div className="text-sm text-white/50 font-medium mt-1.5">{label}</div>
    </div>
  )
}

export default function Stats() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section className="py-24 lg:py-28 bg-navy-800/95 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full opacity-[0.03]" viewBox="0 0 800 600" fill="none">
          <path d="M800 0L400 600H0L400 0H800Z" fill="white" />
          <path d="M600 0L300 600H100L400 0H600Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
        >
          {items.map((item) => (
            <StatItem key={item.label} {...item} isVisible={isVisible} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
