export default function LoadingMenu() {
  return (
    <div className="animate-pulse flex space-x-4">
      <div className="rounded-full bg-zinc-400 h-2 w-10"></div>
      <div className="rounded-full bg-zinc-400 h-2 w-10"></div>
      <div className="hidden">Loading...</div>
    </div>
  )
}
