import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkflowAnimation from './components/WorkflowAnimation'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Stats from './components/Stats'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WorkflowAnimation />
        <Services />
        <HowItWorks />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  )
}

export default App
