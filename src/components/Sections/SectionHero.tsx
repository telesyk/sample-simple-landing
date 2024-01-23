'use client'

import PrimaryButton from '../Buttons/PrimaryButton'
import SecondaryButton from '../Buttons/SecondaryButton'
import { useHomeContext } from '../HomeContainer/context'
import SectionContainer from '../SectionContainer'
import TextContent from '../TextContent'
import { HeroContextProps } from '@/types'

export default function SectionHero() {
  const { hero }: { hero?: HeroContextProps } = useHomeContext()

  return (
    <SectionContainer title={hero?.title}>
      <TextContent
        title={hero?.title}
        content={hero?.content}
        headingType={'h1'}
        className="max-w-[540px]"
      >
        <div className="flex flex-wrap gap-8 items-center">
          <PrimaryButton>{hero?.button?.primary?.title}</PrimaryButton>
          <SecondaryButton>{hero?.button?.secondary?.title}</SecondaryButton>
        </div>
      </TextContent>
    </SectionContainer>
  )
}
