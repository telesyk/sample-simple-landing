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
      <h3 className={`${baseClasses} text-base lg:text-md`}>{text}</h3>
    ) : headingType === 'h2' ? (
      <h2
        className={`${baseClasses} text-2xl lg:text-4xl text-blue-950 dark:text-blue-50`}
      >
        {text}
      </h2>
    ) : (
      <h1
        className={`${baseClasses} text-3xl lg:text-[50px] text-blue-950 dark:text-blue-50`}
      >
        {text}
      </h1>
    )

  return (
    <article className={`text-blue-900/75 dark:text-blue-100 ${className}`}>
      {title && heading(title)}
      {content && <p className="my-8">{content}</p>}
      {children}
    </article>
  )
}
