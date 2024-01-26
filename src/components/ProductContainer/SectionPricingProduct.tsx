'use client'

import { FeaturesContextProps } from '@/types'
import { useProductContext } from './context'
import { SectionContainer, TextContent, PriceCard } from '@/components'

interface SectionProps {
  pricing?: FeaturesContextProps
}

export default function SectionPricingProduct() {
  const { pricing }: SectionProps = useProductContext()

  return (
    <SectionContainer
      title={pricing?.title}
      contentPosition="center"
      className="py-8 lg:py-28 bg-blue-100/10"
      // sectionStyles={styles}
    >
      <TextContent
        title={pricing?.title}
        content={pricing?.content}
        headingType={'h2'}
        className="max-w-screen-md lg:max-w-[600px]"
      >
        <PriceCard />
      </TextContent>
    </SectionContainer>
  )
}
