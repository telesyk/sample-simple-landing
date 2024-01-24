import { HomeProvider } from './context'
import SectionHero from '../Sections/SectionHero'
import SectionFeatures from '../Sections/SectionFeatures'
import SectionPricing from '../Sections/SectionPricing'
import SectionBenefits from '../Sections/SectionBenefits'

export default function HomeContainer() {
  return (
    <HomeProvider>
      <SectionHero />
      <SectionFeatures />
      <SectionBenefits variation="1" />
      <SectionBenefits variation="2" />
      <SectionBenefits variation="3" isButton />
      <SectionPricing />
    </HomeProvider>
  )
}
