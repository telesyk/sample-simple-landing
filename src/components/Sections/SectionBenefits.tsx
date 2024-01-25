'use client'

import { BenefitsContextProps } from '@/types'
import { useHomeContext } from '../HomeContainer/context'
import { PrimaryButton, SectionContainer, TextContent } from '@/components'

interface BenefitsProps {
  variation: '1' | '2' | '3'
  isButton?: boolean
  contentPosition?: 'left' | 'right'
}

export default function SectionBenefits({
  variation,
  isButton = false,
  contentPosition = 'right',
}: BenefitsProps) {
  const {
    benefit1,
    benefit2,
    benefit3,
  }: {
    benefit1?: BenefitsContextProps
    benefit2?: BenefitsContextProps
    benefit3?: BenefitsContextProps
  } = useHomeContext()

  const benefits =
    variation === '1' ? benefit1 : variation === '2' ? benefit2 : benefit3

  return (
    <>
      {!benefits ? (
        <p>loading benefits</p>
      ) : (
        <SectionContainer
          contentPosition={contentPosition}
          title={benefits.title}
          image={`/benefits_${variation}.svg`}
        >
          <TextContent
            title={benefits.title}
            content={benefits.content}
            headingType={'h2'}
            className="max-w-screen-md lg:max-w-[445px]"
          >
            {isButton && (
              <PrimaryButton>{benefits.button?.primary?.title}</PrimaryButton>
            )}
          </TextContent>
        </SectionContainer>
      )}
    </>
  )
}
