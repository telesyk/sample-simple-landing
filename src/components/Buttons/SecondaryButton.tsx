import BaseButton from './Base'
import { ButtonSizeType } from '@/types'

export default function SecondaryButton({
  children,
  size = 'md',
}: {
  children: React.ReactNode
  size?: ButtonSizeType
}) {
  return (
    <BaseButton
      size={size}
      className="text-blue-950 dark:text-blue-100 border-2 border-blue-950 dark:border-blue-100 hover:border-blue-900 dark:hover:border-blue-50 hover:text-blue-900 dark:hover:text-blue-50"
    >
      {children}
    </BaseButton>
  )
}
