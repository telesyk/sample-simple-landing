export default function Icon({
  name: Component,
  ...props
}: {
  name: any
} & any) {
  return <Component {...props} />
}
