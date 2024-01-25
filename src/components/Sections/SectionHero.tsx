'use client'

import { HeroContextProps } from '@/types'
import { useHomeContext } from '../HomeContainer/context'
import useLargeMediaQueryStyles from '@/hooks/useLargeMediaQueryStyles'
import {
  PrimaryButton,
  SecondaryButton,
  SectionContainer,
  TextContent,
} from '@/components'

export default function SectionHero() {
  const { hero }: { hero?: HeroContextProps } = useHomeContext()
  const largeStyles = {
    backgroundImage: 'url(/hero_bg.svg)',
    backgroundPosition: '30vw bottom',
    backgroundSize: '90%',
    backgroundRepeat: 'no-repeat',
  }
  const defaultStyles = {
    backgroundImage: 'url(/hero_bg.svg)',
    backgroundPosition: 'center bottom',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  }
  const styles = useLargeMediaQueryStyles({ defaultStyles, largeStyles })

  return (
    <SectionContainer
      title={hero?.title}
      sectionStyles={styles}
      image="/hero.svg"
      className="max-h-screen lg:h-[80vh] overflow-x-hidden"
      imageClassName="w-full max-w-[480px] lg:max-w-none h-auto lg:scale-150 relative  lg:translate-x-32 xl:translate-x-72"
    >
      <TextContent
        title={hero?.title}
        content={hero?.content}
        headingType={'h1'}
        className="max-w-screen-md lg:max-w-[540px]"
      >
        <div className="flex flex-wrap gap-8 items-center">
          <PrimaryButton>{hero?.button?.primary?.title}</PrimaryButton>
          <SecondaryButton>{hero?.button?.secondary?.title}</SecondaryButton>
        </div>
      </TextContent>
    </SectionContainer>
  )
}
