'use client'

import { BenefitsContextProps } from '@/types'
import { useAboutContext } from './context'
import { PrimaryButton, SectionContainer, TextContent } from '@/components'

interface SectionProps {
  variation: '1' | '2' | '3'
  isButton?: boolean
  contentPosition?: 'left' | 'right'
}

export default function SectionBenefitsAbout({
  variation,
  isButton = false,
  contentPosition = 'right',
}: SectionProps) {
  const {
    benefit,
  }: {
    benefit?: BenefitsContextProps
  } = useAboutContext()

  return (
    <>
      {!benefit ? (
        <p>loading benefits</p>
      ) : (
        <SectionContainer
          contentPosition={contentPosition}
          title={benefit.title}
          image={`/benefits_${variation}.svg`}
        >
          <TextContent
            title={benefit.title}
            content={benefit.content}
            headingType={'h2'}
            className="max-w-screen-md lg:max-w-[445px]"
          >
            {isButton && (
              <PrimaryButton>{benefit.button?.primary?.title}</PrimaryButton>
            )}
          </TextContent>
        </SectionContainer>
      )}
    </>
  )
}
