import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Globe, MessageCircle, Camera } from 'lucide-react'

const companyLinks = [
  { label: 'About Us', href: '#why-us' },
  { label: 'Our Services', href: '#services' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Contact', href: '#contact' },
]
const serviceLinks = [
  { label: 'Commercial Cleaning', href: '#services' },
  { label: 'Deep & Sanitisation', href: '#services' },
  { label: 'Window & Facade', href: '#services' },
  { label: 'Carpet & Floor Care', href: '#services' },
  { label: 'Waste & Recycling', href: '#services' },
  { label: 'Post-Construction', href: '#services' },
]
const locationLinks = [
  'Brisbane CBD',
  'Fortitude Valley',
  'South Brisbane',
  'Spring Hill',
  'Newstead',
  'Bowen Hills',
]
const contactDetails = [
  { icon: Phone, label: '[INSERT: Phone number]' },
  { icon: Mail, label: 'hello@leofm.com.au' },
  { icon: MapPin, label: 'Brisbane, QLD [INSERT: Postcode], Australia' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-800/95 text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-4"
          >
            <img src="/idea%205%20png.png" alt="LEO FM — Facility Management Brisbane" className="h-10 w-auto brightness-0 invert opacity-100" />
              <p className="mt-4 text-base text-white/60 leading-relaxed max-w-xs">
              Premium commercial cleaning, building maintenance and facility management for organizations across Brisbane and Queensland that demand the highest standards.
            </p>
            <div className="flex gap-3 mt-6">
              {[Globe, MessageCircle, Camera].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 hover:text-white transition-all duration-200"
                  aria-label="Social media link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold tracking-[0.15em] uppercase text-white/50 mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-base text-white/90 hover:text-white transition-colors duration-200">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold tracking-[0.15em] uppercase text-white/50 mb-5">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-base text-white/90 hover:text-white transition-colors duration-200">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold tracking-[0.15em] uppercase text-white/50 mb-5">Contact</h4>
            <ul className="space-y-3">
              {contactDetails.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon size={14} className="mt-0.5 shrink-0 text-white/50" />
                  <span className="text-base text-white/90">{label}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h5 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-3">Service Areas</h5>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {locationLinks.map((loc) => (
                  <span key={loc} className="text-sm text-white/60">{loc}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} LEO FM — Facility Management Brisbane. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/40 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/40 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
