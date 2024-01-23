export type ContentPositionType = 'left' | 'right' | 'center'

export type HeadingType = 'h1' | 'h2' | 'h3'

export interface TextContentType {
  title?: string
  content?: string
  image?: string
}

export interface FeatureType {
  title?: string
  description?: string
  icon?: string
}

export type ButtonType = {
  title: string
  link?: null
}

export interface HeroContextProps extends TextContentType {
  button?: {
    primary?: ButtonType
    secondary?: ButtonType
  }
}

export interface FeaturesContextProps extends TextContentType {
  items?: FeatureType[]
}

export type ButtonSizeType = 'sm' | 'md'
