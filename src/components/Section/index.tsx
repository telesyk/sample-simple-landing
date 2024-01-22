import { FeatureType, ContentPositionType } from '@/types'
import Container from '../Container'

interface SectionProps {
  image?: string
  content?: string
  contentPosition?: ContentPositionType
  title?: string
  features?: FeatureType[]
  children: React.ReactNode
}

export default function SectionContainer({
  image,
  content,
  contentPosition = 'center',
  title,
  features,
  children,
}: SectionProps) {
  const classesPosition =
    contentPosition === 'right'
      ? 'flex-row-reverse'
      : contentPosition === 'center'
        ? 'justify-center'
        : ''

  return (
    <section className="w-full flex justify-center">
      <Container>
        <div className={'w-full gap-8 flex ' + classesPosition}>{children}</div>
      </Container>
    </section>
  )
}
