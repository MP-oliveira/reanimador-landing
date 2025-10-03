import HeroSection from '../components/HeroSection'
import JourneySection from '../components/JourneySection'
import PowerSection from '../components/PowerSection'
import ExperienceSection from '../components/ExperienceSection'
import DiscoverySection from '../components/DiscoverySection'
import AuthorSection from '../components/AuthorSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <JourneySection />
      <PowerSection />
      <DiscoverySection />
      <AuthorSection />
      <ExperienceSection />
      {/* Outras seções virão aqui */}
    </>
  )
}
