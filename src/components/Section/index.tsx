import Container from '../Container'

type FeatureType = {
  image?: string
  title?: string
  content?: string
}

export default function SectionContainer({
  image,
  content,
  title,
  features,
  children,
}: {
  image?: string
  content: string
  title?: string
  features?: FeatureType[]
  children: React.ReactNode
}) {
  return <Container className="gap-8">{children}</Container>
}
