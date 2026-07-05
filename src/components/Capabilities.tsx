import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import {
  Sparkles, Droplets, Sun, Sofa, Shield,
  Wrench, AlertTriangle, Users, Clipboard,
  TreePine, PaintBucket, Trash2,
  FileText, Calendar, ClipboardCheck, Building2, BarChart3,
} from 'lucide-react'

const categories = [
  { id: 'cleaning', label: 'Cleaning & Hygiene' },
  { id: 'maintenance', label: 'Maintenance & Compliance' },
  { id: 'grounds', label: 'Grounds & Exterior' },
  { id: 'reporting', label: 'Reporting & Management' },
]

const capabilities: Record<string, { icon: React.ElementType; title: string; description: string }[]> = {
  cleaning: [
    { icon: Sparkles, title: 'Commercial & Domestic Cleaning', description: 'Routine and bespoke cleaning for any facility.' },
    { icon: Droplets, title: 'Deep Sanitisation Programs', description: 'Hospital-grade disinfection for critical environments.' },
    { icon: Sun, title: 'Window & Facade Wash Downs', description: 'Streak-free glass and exteriors at any height.' },
    { icon: Sofa, title: 'Carpet & Floor Care', description: 'Deep extraction, polishing, and restorative treatments.' },
    { icon: Shield, title: 'Pest Control', description: 'Integrated pest management for commercial spaces.' },
  ],
  maintenance: [
    { icon: Wrench, title: 'Preventative Maintenance', description: 'Scheduled inspections to prevent costly failures.' },
    { icon: AlertTriangle, title: 'Reactive Maintenance', description: 'Rapid response for urgent repair requests.' },
    { icon: Shield, title: 'Compliance Management', description: 'Fire, lift, and pool safety compliance handled.' },
    { icon: Users, title: 'Contractor Induction & Management', description: 'Vetted contractors, streamlined onboarding process.' },
    { icon: Clipboard, title: 'Asset Registers', description: 'Complete inventory and lifecycle tracking system.' },
  ],
  grounds: [
    { icon: TreePine, title: 'Landscape Maintenance', description: 'Lawn care, pruning, and seasonal planting services.' },
    { icon: PaintBucket, title: 'Property & Ground Upkeep', description: 'Painting, hardscapes, and general property care.' },
    { icon: Trash2, title: 'Waste & Recycling Management', description: 'Sustainable haul-away and zero-waste programs.' },
  ],
  reporting: [
    { icon: FileText, title: 'Document Management & 24/7 Access', description: 'Secure online portal for all facility documents.' },
    { icon: Calendar, title: 'Maintenance Calendars', description: 'Forward schedules for every recurring task.' },
    { icon: ClipboardCheck, title: 'Regular Inspection Reports', description: 'Detailed findings with photographic evidence.' },
    { icon: Building2, title: 'Facility Management Plans', description: 'Strategic plans tailored to your property.' },
    { icon: BarChart3, title: 'Maintenance & Capex Budgeting Support', description: 'Data-driven forecasts for capital expenditure.' },
  ],
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: i * 0.05, ease: 'easeOut' },
  }),
  exit: { opacity: 0, y: -12, transition: { duration: 0.2 } },
}

export default function Capabilities() {
  const [activeTab, setActiveTab] = useState('cleaning')
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 })
  const items = capabilities[activeTab]

  return (
    <section id="capabilities" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
            What we cover
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-navy-800 mt-4 leading-tight">
            Full-scope capabilities, one accountable team
          </h2>
          <p className="text-slate-400 mt-4 text-base leading-relaxed">
            From daily cleaning to capital planning — every facility need under a single partnership.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className="relative px-5 py-2.5 text-sm font-medium rounded-full transition-colors duration-200"
            >
              {activeTab === cat.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-accent rounded-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className={`relative z-10 ${activeTab === cat.id ? 'text-white' : 'text-slate-400 hover:text-navy-800'}`}>
                {cat.label}
              </span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4"
          >
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group p-5 rounded-xl bg-white border border-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1"
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-4deg]" style={{ backgroundColor: '#2E6FF210' }}>
                  <item.icon size={16} className="text-accent" />
                </div>
                <h3 className="text-sm font-bold font-heading text-navy-800 mb-1.5 leading-snug">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>


      </div>
    </section>
  )
}
