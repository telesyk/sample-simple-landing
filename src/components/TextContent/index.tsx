import { HeadingType } from '@/types'

interface TextContentProps {
  title?: string
  content?: string
  headingType: HeadingType
  children?: React.ReactNode
}

export default function TextContent({
  title,
  content,
  headingType = 'h1',
  children,
}: TextContentProps) {
  const heading = (text: string) =>
    headingType === 'h3' ? (
      <h3 className="text-md">{text}</h3>
    ) : headingType === 'h2' ? (
      <h2 className="text-xl">{text}</h2>
    ) : (
      <h1 className="text-3xl">{text}</h1>
    )

  return (
    <article>
      {title && heading(title)}
      {content && <p>{content}</p>}
      {children}
    </article>
  )
}
