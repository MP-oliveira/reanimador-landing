import HeroSection from '../components/HeroSection'
import JourneySection from '../components/JourneySection'
import PowerSection from '../components/PowerSection'
import ExperienceSection from '../components/ExperienceSection'
import DiscoverySection from '../components/DiscoverySection'
import AuthorSection from '../components/AuthorSection'
import ChoiceSection from '../components/ChoiceSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <JourneySection />
      <PowerSection />
      <DiscoverySection />
      <AuthorSection />
      <ExperienceSection />
      <ChoiceSection />
      {/* Outras seções virão aqui */}
    </>
  )
}
