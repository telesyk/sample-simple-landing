'use client'

import { FeaturesContextProps } from '@/types'
import { useHomeContext } from '../HomeContainer/context'
import { FeatureItem, SectionContainer, TextContent } from '@/components'
import { FeatureIcon1 } from '@/assets'

export default function SectionFeatures() {
  const { features }: { features?: FeaturesContextProps } = useHomeContext()

  return (
    <>
      {features && (
        <SectionContainer title={features.title} image="/features_svg.svg">
          <TextContent
            title={features.title}
            content={features.content}
            headingType={'h2'}
            className="max-w-screen-md lg:max-w-[540px]"
          >
            <div className="lg:my-16 grid grid-cols-2 gap-8">
              {features.items?.map(item => (
                <FeatureItem
                  key={item.title}
                  title={item.title}
                  content={item.description}
                  icon={
                    <FeatureIcon1
                      className={'stroke-blue-950 dark:stroke-blue-100'}
                    />
                  }
                />
              ))}
            </div>
          </TextContent>
        </SectionContainer>
      )}
    </>
  )
}
