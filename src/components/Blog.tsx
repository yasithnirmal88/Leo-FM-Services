import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Calendar, ArrowRight } from 'lucide-react'

const posts = [
  {
    title: 'The Importance of Regular Commercial Cleaning for Brisbane Businesses',
    excerpt: 'How a consistent cleaning schedule protects employee health, presents a professional image, and extends the life of your facility assets.',
    date: 'Coming soon',
  },
  {
    title: 'Facility Management Guide: What Brisbane Property Managers Need to Know',
    excerpt: 'A comprehensive overview of compliance, maintenance schedules, and sanitation standards for commercial properties in Queensland.',
    date: 'Coming soon',
  },
  {
    title: 'Commercial vs Industrial Cleaning: Key Differences for Queensland Facilities',
    excerpt: 'Understanding the distinct requirements, equipment, and certifications needed for different facility types across Brisbane.',
    date: 'Coming soon',
  },
]

export default function Blog() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 })

  return (
    <section id="resources" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
            Resources
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-navy-800 mt-4 leading-tight">
            Insights for facility managers
          </h2>
          <p className="text-slate-400 mt-4 text-lg leading-relaxed">
            Practical guides and industry knowledge for Brisbane commercial property and facility management professionals.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              className="p-8 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-gray-200/40 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
                <Calendar size={14} />
                {post.date}
              </div>
              <h3 className="text-lg font-bold font-heading text-navy-800 mb-3 leading-snug">
                {post.title}
              </h3>
              <p className="text-base text-slate-400 leading-relaxed flex-1">
                {post.excerpt}
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-1.5 text-accent text-base font-semibold hover:gap-2.5 transition-all duration-200"
              >
                Read more <ArrowRight size={16} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
