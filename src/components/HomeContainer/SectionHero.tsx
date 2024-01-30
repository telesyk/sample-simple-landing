'use client'

import { HeroContextProps } from '@/types'
import { useHomeContext } from './context'
import { useCSSStyles } from '@/hooks'
import {
  PrimaryButton,
  SecondaryButton,
  SectionContainer,
  TextContent,
} from '@/components'

export default function SectionHero() {
  const { hero }: { hero?: HeroContextProps } = useHomeContext()
  const largeStyles = {
    backgroundPosition: '30vw 99%',
    backgroundSize: '90%',
  }
  const defaultStyles = {
    backgroundPosition: 'center bottom',
    backgroundSize: 'contain',
  }
  const newStyles = useCSSStyles({ defaultStyles, largeStyles })
  const styles = {
    ...newStyles,
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url(/hero_bg.svg)',
  }

  return (
    <SectionContainer
      title={hero?.title}
      sectionStyles={styles}
      image="/hero.svg"
      className="max-h-screen lg:h-[80vh] lg:min-h-[500px] lg:overflow-visible"
      imageClassName="w-full h-auto lg:scale-150 lg:translate-x-32 xl:translate-x-72"
    >
      <TextContent
        title={hero?.title}
        content={hero?.content}
        headingType={'h1'}
        className="max-w-screen-md lg:max-w-[540px] pt-32"
      >
        <div className="flex flex-wrap gap-8 items-center">
          <PrimaryButton>{hero?.button?.primary?.title}</PrimaryButton>
          <SecondaryButton href={hero?.button?.secondary?.link}>
            {hero?.button?.secondary?.title}
          </SecondaryButton>
        </div>
      </TextContent>
    </SectionContainer>
  )
}
