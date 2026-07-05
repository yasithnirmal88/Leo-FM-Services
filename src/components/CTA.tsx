import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'

const servicesList = [
  'Commercial Cleaning',
  'Deep & Sanitisation',
  'Window & Facade Cleaning',
  'Carpet & Floor Care',
  'Waste & Recycling',
  'Post-Construction Cleaning',
  'Not sure yet',
]

interface FormState {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export default function CTA() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 })
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', service: '', message: '' })
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email'
    if (!form.phone.trim()) errs.phone = 'Phone is required'
    else if (!/^[\d\s\-+()]{7,}$/.test(form.phone)) errs.phone = 'Please enter a valid phone number'
    if (!form.service) errs.service = 'Please select a service'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormState]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  if (submitted) {
    return (
    <section id="contact" className="py-24 lg:py-32 bg-navy-800/95 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={32} className="text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold font-heading text-white leading-tight">
              Thank you, {form.name.split(' ')[0]}!
            </h2>
            <p className="text-white/70 mt-3 text-base max-w-md mx-auto">
              We've received your request and will reach out within 2–4 business hours.
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-navy-800 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04]"
          viewBox="0 0 300 600"
          fill="none"
        >
          <path d="M300 0L150 600H0L150 0H300Z" fill="white" />
          <path d="M220 0L110 600H40L150 0H220Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/60">
              Get started
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-white mt-4 leading-tight">
              Ready for a cleaner facility?
            </h2>
            <p className="text-white/60 mt-4 text-lg leading-relaxed">
              Tell us about your space and we'll craft a proposal tailored to 
              your needs — typically within 24 hours.
            </p>
            <div className="hidden lg:block mt-8 space-y-3">
              {[
                'No-obligation consultation',
                'Custom service proposal',
                'Transparent, fixed pricing',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/70 text-base">
                  <CheckCircle2 size={16} className="text-white/40" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-6 lg:col-start-7"
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl space-y-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-navy-800 mb-1.5">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className={`w-full px-4 py-3 text-base border rounded-lg bg-offwhite text-navy-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all ${errors.name ? 'border-red-300' : 'border-gray-200'}`}
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy-800 mb-1.5">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className={`w-full px-4 py-3 text-base border rounded-lg bg-offwhite text-navy-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all ${errors.email ? 'border-red-300' : 'border-gray-200'}`}
                  />
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-navy-800 mb-1.5">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className={`w-full px-4 py-3 text-base border rounded-lg bg-offwhite text-navy-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all ${errors.phone ? 'border-red-300' : 'border-gray-200'}`}
                  />
                  {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-navy-800 mb-1.5">Service Needed</label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 text-base border rounded-lg bg-offwhite text-navy-800 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all ${errors.service ? 'border-red-300' : 'border-gray-200'}`}
                  >
                    <option value="">Select a service</option>
                    {servicesList.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.service && <p className="text-xs text-red-400 mt-1">{errors.service}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-navy-800 mb-1.5">Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your facility and needs..."
                  className="w-full px-4 py-3 text-base border border-gray-200 rounded-lg bg-offwhite text-navy-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-navy-800 text-white text-base font-semibold rounded-lg hover:bg-navy-900 transition-all duration-200 hover:shadow-lg hover:shadow-navy-900/25 disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Request
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
