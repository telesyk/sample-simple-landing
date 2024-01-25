import BaseButton from './Base'
import { ButtonSizeType } from '@/types'

export default function PrimaryButton({
  children,
  size = 'md',
}: {
  children: React.ReactNode
  size?: ButtonSizeType
}) {
  return (
    <BaseButton
      size={size}
      className="bg-blue-950 dark:bg-blue-900 text-blue-50 border-transparent hover:bg-blue-900 dark:hover:bg-blue-800"
    >
      {children}
    </BaseButton>
  )
}
