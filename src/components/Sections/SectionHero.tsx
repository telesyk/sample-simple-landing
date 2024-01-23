'use client'

import PrimaryButton from '../Buttons/PrimaryButton'
import SecondaryButton from '../Buttons/SecondaryButton'
import { useHomeContext } from '../HomeContainer/context'
import SectionContainer from '../Section'
import TextContent from '../TextContent'
import { HeroContextType } from '@/types'

export default function SectionHero() {
  const { hero }: { hero?: HeroContextType } = useHomeContext()

  return (
    <SectionContainer>
      <TextContent
        title={hero?.title}
        content={hero?.content}
        headingType={'h1'}
      >
        <div className="flex flex-wrap gap-8 items-center">
          <PrimaryButton>{hero?.button?.primary?.title}</PrimaryButton>
          <SecondaryButton>{hero?.button?.secondary?.title}</SecondaryButton>
        </div>
      </TextContent>
    </SectionContainer>
  )
}
