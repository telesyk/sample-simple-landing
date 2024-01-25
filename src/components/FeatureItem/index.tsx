interface FeatureItemProps {
  title: string | undefined
  content: string | undefined
  icon?: React.ReactElement
  className?: string
}

export default function FeatureItem({
  title,
  content,
  icon,
  className,
}: FeatureItemProps) {
  return (
    <div className={`inline-flex flex-col gap-2 ${className}`}>
      <div className="flex-auto">{icon}</div>
      <h3 className="font-medium leading-snug text-md">{title}</h3>
      <p className="flex-auto text-sm text-blue-900/90 dark:text-blue-100/80">
        {content}
      </p>
    </div>
  )
}
