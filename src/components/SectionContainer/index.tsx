import { ContentPositionType } from '@/types'
import Container from '../Layout/Container'
import Image from 'next/image'
import { CSSProperties } from 'react'

interface SectionProps {
  image?: string
  contentPosition?: ContentPositionType
  title?: string
  children: React.ReactNode
  className?: string
  sectionStyles?: CSSProperties
}

export default function SectionContainer({
  image,
  contentPosition = 'left',
  title = '',
  children,
  className = '',
  sectionStyles,
}: SectionProps) {
  const classesPosition =
    contentPosition === 'right'
      ? 'lg:flex-row-reverse'
      : contentPosition === 'center'
        ? 'justify-center text-center'
        : ''

  return (
    <section
      className={`w-full flex justify-center ${className}`}
      style={sectionStyles}
    >
      <Container className="py-12 lg:py-22">
        <div
          className={`w-full gap-8 flex flex-col lg:flex-row items-center ${classesPosition}`}
        >
          {children}
          {image && (
            <figure className="flex-auto place-self-center">
              <Image
                alt={title}
                src={image}
                width={1}
                height={1}
                className="w-full max-w-[480px] h-auto"
              />
            </figure>
          )}
        </div>
      </Container>
    </section>
  )
}
