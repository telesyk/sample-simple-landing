import { CSSProperties } from 'react'
import { ContentPositionType } from '@/types'
import Image from 'next/image'
import { Container } from '@/components'

interface SectionProps {
  children: React.ReactNode
  className?: string
  title?: string
  sectionStyles?: CSSProperties
  itemsDesktopAlign?: 'start' | 'end' | 'center'
  contentPosition?: ContentPositionType
  image?: string
  imageClassName?: string
  imageWidth?: `${number}` | number
  imageHeight?: `${number}` | number
}

export default function SectionContainer({
  children,
  className = 'py-12 lg:py-24',
  title = '',
  sectionStyles,
  itemsDesktopAlign = 'center',
  contentPosition = 'left',
  image,
  imageClassName = 'w-full h-auto',
  imageWidth = 100,
  imageHeight = 100,
}: SectionProps) {
  const contentPositionClass =
    contentPosition === 'right'
      ? 'lg:flex-row-reverse lg:justify-between'
      : contentPosition === 'center'
        ? 'lg:justify-center text-center'
        : 'lg:justify-between'

  const imagePositionClass =
    contentPosition === 'right'
      ? 'lg:justify-end'
      : contentPosition === 'left'
        ? 'lg:justify-start'
        : ''

  return (
    <section
      className={`min-w-full flex justify-center ${className}`}
      style={sectionStyles}
    >
      <Container>
        <div
          className={`w-full gap-16 flex flex-col lg:flex-row items-center lg:items-${itemsDesktopAlign} ${contentPositionClass}`}
        >
          {children}
          {image && (
            <figure
              className={`max-w-[480px] flex-auto lg:flex ${imagePositionClass}`}
            >
              <Image
                alt={title}
                src={image}
                width={imageWidth}
                height={imageHeight}
                className={imageClassName}
              />
            </figure>
          )}
        </div>
      </Container>
    </section>
  )
}
