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
            className="fill-blue-950 dark:fill-blue-100"
            strokeWidth="0"
          />
        </div>
      )}
      <h3 className="font-medium leading-snug text-md text-blue-950 dark:text-blue-100">
        {title}
      </h3>
      <p className="flex-auto text-sm text-blue-900/90 dark:text-blue-100/80">
        {content}
      </p>
    </div>
  )
}
