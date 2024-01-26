import Icon from '../Icon'
import { iconsList } from '@/assets'

interface FeatureItemProps {
  title: string | undefined
  content: string | undefined
  icon?: string
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
      {icon && (
        <div className="flex-auto">
          <Icon
            name={iconsList[icon]}
            className="stroke-blue-950 dark:stroke-blue-100"
          />
        </div>
      )}
      <h3 className="font-medium leading-snug text-md">{title}</h3>
      <p className="flex-auto text-sm text-blue-900/90 dark:text-blue-100/80">
        {content}
      </p>
    </div>
  )
}
