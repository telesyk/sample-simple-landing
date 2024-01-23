'use client'

import { useHomeContext } from '../HomeContainer/context'
import SectionContainer from '../SectionContainer'
import TextContent from '../TextContent'
import { FeaturesContextProps } from '@/types'

export default function SectionFeatures() {
  const { features }: { features?: FeaturesContextProps } = useHomeContext()

  return (
    <SectionContainer title={features?.title} image="/features_svg.svg">
      <TextContent
        title={features?.title}
        content={features?.content}
        headingType={'h1'}
        className="max-w-[540px]"
      >
        <div className="flex flex-wrap gap-8 items-center">Items</div>
      </TextContent>
    </SectionContainer>
  )
}
