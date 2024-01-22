'use client'

import { useHomeContext } from './context'
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
      />
    </SectionContainer>
  )
}
