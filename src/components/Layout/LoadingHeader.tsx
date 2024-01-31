import { TbBrandAbstract, TbMenu } from 'react-icons/tb'
import Container from './Container'

export default function LoadingHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 backdrop-blur bg-slate-700/5 shadow flex justify-center">
      <Container className="basis-full justify-between items-center gap-8 sm:gap-16 md:gap-24 py-2">
        <div className="animate-pulse">
          <TbBrandAbstract className="w-10 h-10 stroke-slate-700/50" />
        </div>
        <div className="flex-1 animate-pulse">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
            <div className="h-2 bg-slate-700/50 rounded"></div>
            <div className="h-2 bg-slate-700/50 rounded"></div>
            <div className="hidden md:block h-2 bg-slate-700/50 rounded"></div>
          </div>
        </div>
        <div className="animate-pulse">
          <TbMenu className="w-8 h-8 stroke-slate-700/50" />
        </div>
      </Container>
    </header>
  )
}
