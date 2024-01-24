import { HeadingType } from '@/types'

interface TextContentProps {
  title?: string
  content?: string
  headingType: HeadingType
  children?: React.ReactNode
  className?: string
}

export default function TextContent({
  title,
  content,
  headingType = 'h1',
  children,
  className,
}: TextContentProps) {
  const baseClasses = 'font-medium leading-snug'
  const heading = (text: string) =>
    headingType === 'h3' ? (
      <h3 className={`text-md leading ${baseClasses}`}>{text}</h3>
    ) : headingType === 'h2' ? (
      <h2 className={`text-4xl ${baseClasses}`}>{text}</h2>
    ) : (
      <h1 className={`text-5xl ${baseClasses}`}>{text}</h1>
    )

  return (
    <article className={className}>
      {title && heading(title)}
      {content && <p className="my-8">{content}</p>}
      {children}
    </article>
  )
}
