import AboutContainer from '@/components/AboutContainer'
import { AboutProvider } from '@/components/AboutContainer/context'

export default function About() {
  return (
    <AboutProvider>
      <AboutContainer />
    </AboutProvider>
  )
}
