import BaseButton from './Base'
import { ButtonProps } from '@/types'

export default function PrimaryButton({
  size,
  ...otherProps
}: ButtonProps & any) {
  const { children } = otherProps
  return (
    <BaseButton
      {...otherProps}
      size={size}
      className="bg-blue-950 dark:bg-blue-900 text-blue-50 border-transparent hover:bg-blue-900 dark:hover:bg-blue-800"
    >
      {children}
    </BaseButton>
  )
}
