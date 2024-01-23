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
      className="bg-blue-950 text-blue-50 border-transparent hover:bg-blue-900"
    >
      {children}
    </BaseButton>
  )
}
