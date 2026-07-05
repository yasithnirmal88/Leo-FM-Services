import InkReveal from './components/ui/ink-reveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Process from './components/Process'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Clients from './components/Clients'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <img src="/office.png" alt="" className="fixed inset-0 w-full h-full object-cover z-0" />

      <InkReveal
        globalTracking
        maskColor={[247, 248, 250]}
        brushSize={160}
        className="fixed inset-0 z-0"
      />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <WhyUs />
          <Process />
          <Stats />
          <Testimonials />
          <Clients />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  )
}
