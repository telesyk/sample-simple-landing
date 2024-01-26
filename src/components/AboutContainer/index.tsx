import { AboutProvider } from './context'
import { SectionFeaturesTeam, SectionBenefitsAbout } from '@/components'

export default function AboutContainer() {
  return (
    <AboutProvider>
      <SectionBenefitsAbout contentPosition="left" variation="3" isButton />
      <SectionFeaturesTeam />
    </AboutProvider>
  )
}
