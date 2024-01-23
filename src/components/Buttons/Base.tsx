import Link from 'next/link'
import { ButtonSizeType } from '@/types'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  className?: string
  size: ButtonSizeType
}

export default function BaseButton({
  children,
  href = '',
  className,
  size,
}: ButtonProps) {
  const sizeClasses =
    size === 'md'
      ? 'min-w-[190px] py-1 px-6 text-base font-medium'
      : 'min-w-[120px] py-[3px] px-4 text-xs'
  const classes = `inline-flex items-center justify-center gap-4 rounded-sm border-2 box-border transition-colors ${sizeClasses} ${className}`

  return (
    <>
      {!href ? (
        <Link className={classes} href={href}>
          {children}
        </Link>
      ) : (
        <button className={classes}>{children}</button>
      )}
    </>
  )
}
