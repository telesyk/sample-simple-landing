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
      className="text-blue-950 border-2 border-blue-950 hover:border-blue-900 hover:text-blue-900"
    >
      {children}
    </BaseButton>
  )
}
