import Link from 'next/link'
import { ButtonProps } from '@/types'

const baseClasses =
  'inline-flex items-center justify-center gap-4 rounded border-2 box-border transition-colors'

export default function BaseButton({
  size = 'md',
  ...otherProps
}): ButtonProps & React.ReactNode {
  const { className, children } = otherProps
  const sizeClasses =
    size === 'md'
      ? 'min-w-[190px] py-1 px-6 text-base font-medium'
      : 'min-w-[120px] py-[3px] px-4 text-xs'
  const classes = `${baseClasses} ${sizeClasses} ${className}`

  return (
    <>
      {otherProps.href ? (
        <Link {...otherProps} href={otherProps.href} className={classes}>
          {children}
        </Link>
      ) : (
        <button {...otherProps} className={classes} type="button">
          {children}
        </button>
      )}
    </>
  )
}
