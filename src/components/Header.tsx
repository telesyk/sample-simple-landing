import Container from "./Container"

export default function Header() {
  return (
    <div className='bg-rose-100 flex justify-center'>
      <Container className="bg-rose-200 gap-6 justify-between">
        <div>Navigation</div>
        <div>Brand</div>
        <div>Action button</div>
      </Container>
    </div>
  )
}
