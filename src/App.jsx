import Navbar from './components/Navbar'
import './App.css'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

function App() {

  return (
  <>
    <Navbar/>
    <div className="max-w-7xl m-auto pt-20 px-6">
    <HeroSection />
    <FeatureSection/>
    <Workflow />
    <Pricing />
    <Testimonial />
    <Footer />
    </div>
  </>
  )
}

export default App
