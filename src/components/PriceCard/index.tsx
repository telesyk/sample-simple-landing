'use client'

import { GlobalProps } from '@/types'
import { useGlobalContext } from '@/app/context'
import PrimaryButton from '../Buttons/PrimaryButton'

interface PriceCardProps {
  className?: React.ReactNode
}

export default function PriceCard({ className }: PriceCardProps) {
  const { pricing }: GlobalProps = useGlobalContext()
  const priceItem = !pricing ? null : pricing[0]

  return (
    <>
      {!priceItem ? (
        <p>Loading price</p>
      ) : (
        <div className={`flex flex-col gap-2.5 p-4 ${className}`}>
          <div className="font-bold text-5xl text-blue-950">
            $ {priceItem.value}
          </div>
          <div className="text-blue-950">{priceItem.title}</div>
          <div className="mt-12 text-zinc-500 text-sm">
            {priceItem.description}
          </div>
          <div className="py-1">
            <PrimaryButton>{priceItem.button?.primary?.title}</PrimaryButton>
          </div>
        </div>
      )}
    </>
  )
}
