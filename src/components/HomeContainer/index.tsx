import { HomeProvider } from './context'
import SectionHero from '../Sections/SectionHero'
import SectionFeatures from '../Sections/SectionFeatures'
import SectionPricing from '../Sections/SectionPricing'

export default function HomeContainer() {
  return (
    <HomeProvider>
      <SectionHero />
      <SectionFeatures />
      <SectionPricing />
    </HomeProvider>
  )
}
