import TopBar from '../components/TopBar'
import HeroSection from '../components/HeroSection'
import JourneySection from '../components/JourneySection'
import PowerSection from '../components/PowerSection'
import ExperienceSection from '../components/ExperienceSection'
import DiscoverySection from '../components/DiscoverySection'
import AuthorSection from '../components/AuthorSection'
import ChoiceSection from '../components/ChoiceSection'
import AmazonSection from '../components/AmazonSection'
import PreviewSection from '../components/PreviewSection'
import FinalSection from '../components/FinalSection'

export default function Home() {
  return (
    <>
      <TopBar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="journey">
        <JourneySection />
      </div>
      <div id="power">
        <PowerSection />
      </div>
      <div id="discovery">
        <DiscoverySection />
      </div>
      <div id="author">
        <AuthorSection />
      </div>
      <div id="experience">
        <ExperienceSection />
      </div>
      <div id="choice">
        <ChoiceSection />
      </div>
      <div id="amazon">
        <AmazonSection />
      </div>
      <div id="preview">
        <PreviewSection />
      </div>
      <div id="final">
        <FinalSection />
      </div>
    </>
  )
}
