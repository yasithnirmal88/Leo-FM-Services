import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Capabilities from './components/Capabilities'
import Process from './components/Process'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <WhyUs />
          <Capabilities />
          <Process />
          <Stats />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  )
}
