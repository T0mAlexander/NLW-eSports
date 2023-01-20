import './styles/main.css'
import logoImg from './assets/Logo.svg'
import GameCard from './components/GameCard'
import { useEffect, useState } from 'react'
import Popup from './components/Pop-up'
import axios from 'axios'


interface Game {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}

export default function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    axios('http://localhost:3000/games').then(response => {
      setGames(response.data)
    })
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} />
      <h1 className="text-6xl text-white font-black mt-20">Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui.</h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => {
          return (
            <GameCard
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.ads} />
          )
        })}
      </div>
      <Popup />
    </div>
  )
}
