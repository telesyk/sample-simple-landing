import { ProductProvider } from './context'
import { SectionFeaturesPhone, SectionPricingProduct } from '@/components'

export default function ProductContainer() {
  return (
    <ProductProvider>
      <SectionFeaturesPhone />
      <SectionPricingProduct />
    </ProductProvider>
  )
}
