interface GameCardProps {
  title: string;
  bannerUrl: string
  adsCount: number
}

export default function GameBanner({ bannerUrl, title, adsCount }: GameCardProps) {
  return (
    <a href="" className='relative rounded-lg overflow-hidden'>
      <img src={bannerUrl} />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className='font-bold text-white block'>{title}</strong>
        <span className='text-zinc-300 text-sm block'>
          {[adsCount > 1 ? `${adsCount} anúncios` : `${adsCount} anúncio` && adsCount === 0 ? `Nenhum anúncio` : `${adsCount} anúncio`]}
        </span>
      </div>
    </a>
  )
}
