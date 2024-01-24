import { ContentPositionType } from '@/types'
import Container from '../Layout/Container'
import Image from 'next/image'

interface SectionProps {
  image?: string
  contentPosition?: ContentPositionType
  title?: string
  children: React.ReactNode
  className?: string
}

export default function SectionContainer({
  image,
  contentPosition = 'left',
  title = '',
  children,
  className = '',
}: SectionProps) {
  const classesPosition =
    contentPosition === 'right'
      ? 'flex-row-reverse'
      : contentPosition === 'center'
        ? 'justify-center text-center'
        : ''

  return (
    <section className={`w-full flex justify-center ${className}`}>
      <Container className="py-6">
        <div
          className={`w-full gap-8 flex flex-col lg:flex-row lg:items-center ${classesPosition}`}
        >
          {children}
          {image && (
            <figure className="flex-auto">
              <Image
                alt={title}
                src={image}
                width={1}
                height={1}
                className="w-full h-auto"
              />
            </figure>
          )}
        </div>
      </Container>
    </section>
  )
}
