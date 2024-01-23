import SectionHero from '../Sections/SectionHero'
import { HomeProvider } from './context'

export default function HomeContainer() {
  return (
    <HomeProvider>
      <SectionHero />
    </HomeProvider>
  )
}
