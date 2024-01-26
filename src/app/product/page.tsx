import ProductContainer from '@/components/ProductContainer'
import { ProductProvider } from '@/components/ProductContainer/context'

export default function Product() {
  return (
    <ProductProvider>
      <ProductContainer />
    </ProductProvider>
  )
}
