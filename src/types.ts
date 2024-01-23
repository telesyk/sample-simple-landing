export type FeatureType = {
  image?: string
  title?: string
  content?: string
}

export type ContentPositionType = 'left' | 'right' | 'center'

export type HeadingType = 'h1' | 'h2' | 'h3'

export type HeroButtonType = {
  title: string
  link?: null
}

export type HeroContextType = {
  title: string
  content: string
  button?: {
    primary?: HeroButtonType
    secondary?: HeroButtonType
  }
}

export type ButtonSizeType = 'sm' | 'md'
