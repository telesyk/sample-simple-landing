import { HomeProvider } from './context'
import {
  SectionHero,
  SectionFeatures,
  SectionPricing,
  SectionBenefits,
} from '@/components'

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
