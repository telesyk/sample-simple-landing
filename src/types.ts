export type NavLinkType = string

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

export interface GlobalProps {
  navigation: {
    home: NavLinkType
    about: NavLinkType
    contact: NavLinkType
  }
  brand: BrandType
  social?: SocialItemType[]
  header?: {
    button: {
      primary: ButtonType
    }
  }
  footer?: {
    button: {
      primary: ButtonType
    }
  }
  pricing?: PricingItemType[]
}

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
