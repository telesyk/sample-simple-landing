'use client'

import { FeaturesContextProps } from '@/types'
import { FeatureItem, SectionContainer, TextContent } from '@/components'
import { useProductContext } from './context'

interface SectionProps {
  features?: FeaturesContextProps
}

export default function SectionFeaturesTeam() {
  const { features }: SectionProps = useProductContext()

  return (
    <>
      {features && (
        <SectionContainer
          className="py-12 lg:pt-24 lg:pb-0 lg:max-h-[850px] lg:overflow-hidden"
          contentPosition="left"
          itemsDesktopAlign="start"
          title={features.title}
          image="/phone-img.png"
          imageWidth={480}
          imageHeight={480}
          imageClassName="max-w-min h-auto lg:max-w-none lg:w-[492px]"
        >
          <TextContent
            title={features.title}
            content={features.content}
            headingType="h2"
            className="max-w-screen-md lg:flex-1 lg:basis-1/2 xl:pt-16"
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
