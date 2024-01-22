'use client'

import { useHomeContext } from './context'
import SectionContainer from '../Section'
import TextContent from '../TextContent'

export default function SectionHero() {
  // temporaly using 'any' as type to fix typescript lexical issue
  const { hero }: any = useHomeContext()

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
