'use client'

import { FeaturesContextProps } from '@/types'
import { useHomeContext } from '../HomeContainer/context'
import SectionContainer from '../SectionContainer'
import TextContent from '../TextContent'
import PriceCard from '../PriceCard'

export default function SectionPricing() {
  const { pricing }: { pricing?: FeaturesContextProps } = useHomeContext()
  const styles = {
    backgroundImage: 'url(/pricing_bg.svg)',
    backgroundPosition: 'center top',
    backgroundSize: 'auto',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <SectionContainer
      title={pricing?.title}
      contentPosition="center"
      className="py-8 lg:py-32"
      sectionStyles={styles}
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
