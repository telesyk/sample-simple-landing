export default function Container({
  children,
  className = '',
}: Readonly<{
  children: React.ReactNode
  className?: string
}>) {
  return <div className={`px-5 max-w-6xl flex ${className}`}>{children}</div>
}
