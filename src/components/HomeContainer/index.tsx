import { HomeProvider } from './context'
import SectionHero from '../Sections/SectionHero'
import SectionFeatures from '../Sections/SectionFeatures'

export default function HomeContainer() {
  return (
    <HomeProvider>
      <SectionHero />
      <SectionFeatures />
    </HomeProvider>
  )
}
