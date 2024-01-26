'use client'

import { FeaturesContextProps } from '@/types'
import { FeatureItem, SectionContainer, TextContent } from '@/components'
import { useAboutContext } from '../AboutContainer/context'

interface SectionProps {
  features?: FeaturesContextProps
}

export default function SectionFeaturesTeam() {
  const { features }: SectionProps = useAboutContext()

  return (
    <>
      {features && (
        <SectionContainer
          contentPosition="right"
          title={features.title}
          image="/team-img.jpg"
          imageWidth={615}
          imageHeight={615}
          imageClassName="w-auto lg:max-w-min h-full lg:h-[615px]"
        >
          <TextContent
            headingType="h2"
            className="max-w-screen-md lg:flex-1 lg:basis-1/2"
          >
            <div className="lg:my-16 grid grid-cols-2 gap-8">
              {features.items?.map(item => (
                <FeatureItem
                  key={item.title}
                  title={item.title}
                  content={item.description}
                  icon="feature-icon-1"
                />
              ))}
            </div>
          </TextContent>
        </SectionContainer>
      )}
    </>
  )
}
