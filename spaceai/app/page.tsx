// src/app/page.tsx
import Hero from '../components/Hero'
import AboutCompany from '../components/AboutCompany'
import ServicesPreview from '../components/ServicesPreview'
import StatsBanner from '../components/StatsBanner'
import ProjectsPreview from '../components/ProjectsPreview'
import Testimonials from '../components/Testimonials'
import ClientsLogo from '../components/ClientsLogo'
import TeamPreview from '../components/TeamPreview'
import WhyChooseUs from '../components/WhyChooseUs'
import FinalCTA from '../components/FinalCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutCompany />
      <ServicesPreview />
      <StatsBanner />
      <ProjectsPreview />
      <Testimonials />
      <ClientsLogo />
      <TeamPreview />
      <WhyChooseUs />
      <FinalCTA />
    </>
  )
}
