export type NavType = {
  title: string
  url: string
}

export type SocialItemType = {
  title: string
  url: string
}

export type PricingItemType = {
  title: string
  description?: string
  value: string
}

export type BrandType = {
  title: string
  logo: string
  copyright: string
}

export type ButtonType = {
  title: string
  link?: null
}

export type ButtonVariationType = 'primary' | 'secondary'

export type ButtonSizeType = 'sm' | 'md'

export type ContentPositionType = 'left' | 'right' | 'center'

export type HeadingType = 'h1' | 'h2' | 'h3'

export type ButtonMapType = {
  [key in ButtonVariationType]?: ButtonType
}

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

export interface HeroContextProps extends TextContentType {
  button?: ButtonMapType
}

export interface FeaturesContextProps extends TextContentType {
  items?: FeatureType[]
}

export interface GlobalProps {
  navigation: NavType[]
  brand: BrandType
  socials?: SocialItemType[] | undefined
  header?: {
    button: ButtonMapType
  }
  footer?: {
    button: ButtonMapType
  }
  pricing?: PricingItemType[]
}
