import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import InkReveal from './ui/ink-reveal'
import { ClipboardList, FileText, Users, Settings } from 'lucide-react'

const steps = [
  { icon: ClipboardList, title: 'Consultation', description: 'We audit your space and learn your operational priorities.' },
  { icon: FileText, title: 'Custom Proposal', description: 'A tailored scope, schedule, and transparent pricing.' },
  { icon: Users, title: 'Onboarding', description: 'Account manager assigned, team deployed, systems integrated.' },
  { icon: Settings, title: 'Ongoing Management', description: 'Continuous monitoring, monthly reviews, proactive upgrades.' },
]

export default function Process() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 })

  return (
    <section id="process" className="relative py-24 lg:py-32 overflow-hidden">
      <img src="/office5.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
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
            How it works
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-navy-800 mt-4 leading-tight">
            From first call to seamless service
          </h2>
          <p className="text-slate-400 mt-4 text-lg leading-relaxed">
            A proven process that makes onboarding effortless.
          </p>
        </motion.div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gray-200">
            <div className="absolute inset-0 bg-accent/20" style={{ width: isVisible ? '100%' : '0%', transition: 'width 1s ease 0.5s' }} />
          </div>

          {steps.map((step, i) => {
            const { ref: stepRef, isVisible: stepVisible } = useScrollAnimation({ threshold: 0.2 })
            return (
              <motion.div
                key={step.title}
                ref={stepRef}
                initial={{ opacity: 0, y: 40 }}
                animate={stepVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15, ease: 'easeOut' }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:border-accent/20 group-hover:-translate-y-0.5">
                    <step.icon size={24} className="text-accent" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center shadow-md">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-base font-bold font-heading text-navy-800 mb-2">{step.title}</h3>
                <p className="text-base text-slate-400 leading-relaxed max-w-[240px]">{step.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
