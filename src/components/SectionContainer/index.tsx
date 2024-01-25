import { CSSProperties } from 'react'
import { ContentPositionType } from '@/types'
import Image from 'next/image'
import { Container } from '@/components'

interface SectionProps {
  image?: string
  contentPosition?: ContentPositionType
  title?: string
  children: React.ReactNode
  className?: string
  imageClassName?: string
  sectionStyles?: CSSProperties
}

export default function SectionContainer({
  image,
  contentPosition = 'left',
  title = '',
  children,
  className = '',
  imageClassName = 'w-full max-w-[480px] h-auto',
  sectionStyles,
}: SectionProps) {
  const classesPosition =
    contentPosition === 'right'
      ? 'lg:flex-row-reverse'
      : contentPosition === 'center'
        ? 'justify-center text-center'
        : ''

  const imageClassesPosition =
    contentPosition === 'right'
      ? 'lg:justify-start'
      : contentPosition === 'left'
        ? 'lg:justify-end'
        : ''

  return (
    <section
      className={`w-full flex justify-center ${className}`}
      style={sectionStyles}
    >
      <Container className="py-12 lg:py-24">
        <div
          className={`w-full gap-8 flex flex-col lg:flex-row items-center ${classesPosition}`}
        >
          {children}
          {image && (
            <figure
              className={`flex-auto flex justify-center lg:max-w-[49%] ${imageClassesPosition}`}
            >
              <Image
                alt={title}
                src={image}
                width={1}
                height={1}
                className={imageClassName}
              />
            </figure>
          )}
        </div>
      </Container>
    </section>
  )
}
