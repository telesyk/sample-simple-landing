import Container from './Container'

export default function Footer() {
  return (
    <div className="bg-sky-100 flex justify-center">
      <Container className="bg-sky-200 flex-col">
        <div>Top section</div>
        <div>Bottom section</div>
      </Container>
    </div>
  )
}
