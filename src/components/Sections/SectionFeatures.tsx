'use client'

import { FeaturesContextProps } from '@/types'
import { useHomeContext } from '../HomeContainer/context'
import { SectionContainer, TextContent } from '@/components'

export default function SectionFeatures() {
  const { features }: { features?: FeaturesContextProps } = useHomeContext()

  return (
    <SectionContainer title={features?.title} image="/features_svg.svg">
      <TextContent
        title={features?.title}
        content={features?.content}
        headingType={'h2'}
        className="max-w-screen-md lg:max-w-[540px]"
      >
        <div className="flex flex-wrap gap-8 items-center">Items</div>
      </TextContent>
    </SectionContainer>
  )
}
