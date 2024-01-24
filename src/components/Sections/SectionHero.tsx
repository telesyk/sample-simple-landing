'use client'

import PrimaryButton from '../Buttons/PrimaryButton'
import SecondaryButton from '../Buttons/SecondaryButton'
import { useHomeContext } from '../HomeContainer/context'
import SectionContainer from '../SectionContainer'
import TextContent from '../TextContent'
import { HeroContextProps } from '@/types'

export default function SectionHero() {
  const { hero }: { hero?: HeroContextProps } = useHomeContext()
  const styles = {
    backgroundImage: 'url(/hero_bg.svg)',
    backgroundPosition: '30vw bottom',
    backgroundSize: '85%',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <SectionContainer
      title={hero?.title}
      sectionStyles={styles}
      className="py-16 lg:pt-40 lg:pb-64"
    >
      <TextContent
        title={hero?.title}
        content={hero?.content}
        headingType={'h1'}
        className="max-w-screen-md lg:max-w-[540px]"
      >
        <div className="flex flex-wrap gap-8 items-center">
          <PrimaryButton>{hero?.button?.primary?.title}</PrimaryButton>
          <SecondaryButton>{hero?.button?.secondary?.title}</SecondaryButton>
        </div>
      </TextContent>
    </SectionContainer>
  )
}
