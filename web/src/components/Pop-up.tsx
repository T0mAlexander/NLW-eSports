import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox'
import { Check, GameController } from 'phosphor-react'
import CreateAdBanner from './CreateAdBanner'
import Input from './Input'
import * as Select from '@radix-ui/react-select';
import { styled } from '@stitches/react';
import { useEffect, useState, FormEvent } from 'react'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import Dropdown from './Dropdown'
import axios from 'axios'

const triggerStyle = styled(Select.Trigger, {
  '&[data-placeholder]': { color: '#71717A' },
  backgroundColor: '#18181B',
  display: 'inline-flex',
  padding: '12px 16px',
  borderRadius: '4px',
  justifyContent: 'space-between',
})

const contentStyle = styled(Select.Content, {
  overflow: 'hidden',
  backgroundColor: '#18181B',
  padding: '12px 16px',
  border: '1px solid #71717A',
  borderRadius: '4px'
})

const itemStyle = styled(Select.Item, {
  color: '#FFF',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  height: 35,

  '&[data-highlighted]': {
    backgroundColor: '#2A2634',
    color: '#fff',
  },
})

const itemIndicatorStyle = styled(Select.ItemIndicator, {
  padding: '0 0 2px 5px',
  display: 'flex',
  justifyContent: 'space-evenly',
})

export const SelectItemIndicator = itemIndicatorStyle
export const SelectItem = itemStyle
export const SelectTrigger = triggerStyle
export const SelectContent = contentStyle

interface Game {
  id: string
  title: string
}

export default function Popup() {
  const [weekDays, setWeekDays] = useState<string[]>([])
  const [useVoip, setVoip] = useState(false)
  const [game, setGames] = useState<Game[]>([])

  //! Backend Route
  useEffect(() => {
    axios('http://localhost:3000/games').then(response => {
      setGames(response.data)
    })
  }, [])

  async function createdAd(event: FormEvent) {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)
    // console.log(data)

    //* Validação
    if (!data.name) {
      return;
    }

    try {
      await axios.post(`http://localhost:3000/games/${data.game}/ads`, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: weekDays.map(Number),
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoip: useVoip
      })
      alert('Anúncio criado com sucesso')

    } catch (error) {
      console.log(error)
      alert('Erro ao criar o anúncio')
    }
  }

  return (
    <Dialog.Root>
      <CreateAdBanner />
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
        <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
          <Dialog.Title className="font-black text-3xl">Publique um anúncio</Dialog.Title>

          <form onSubmit={createdAd} className='mt-8 flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <label className="font-semibold" htmlFor="game">Qual o game?</label>
              <Dropdown />
            </div>

            <div className='flex flex-col gap-2'>
              <label className="font-semibold" htmlFor="name">Seu nome (ou nickname)</label>
              <Input name="name" id="name" placeholder="Como te chamam dentro do game?" />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold" htmlFor="yearsPlaying">Joga há quantos anos?</label>
                <Input name="yearsPlaying" id="yearsPlaying" type="text" placeholder="Tudo bem ser ZERO" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold" htmlFor="discord">Qual seu Discord?</label>
                <Input name="discord" id="discord" placeholder="Ex: User#0000" />
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold" htmlFor="weekDays">Quando costuma jogar?</label>

                <ToggleGroup.Root
                  type="multiple"
                  className="grid grid-cols-4 gap-2"
                  value={weekDays}
                  onValueChange={setWeekDays}>

                  <ToggleGroup.Item
                    value="0"
                    className={`text-white font-bold w-11 h-11 rounded ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                    title="Domingo">D</ToggleGroup.Item>

                  <ToggleGroup.Item
                    value="1"
                    className={`text-white font-bold w-11 h-11 rounded ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                    title="Segunda">S</ToggleGroup.Item>

                  <ToggleGroup.Item
                    value="2"
                    className={`text-white font-bold w-11 h-11 rounded ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                    title="Terça">T</ToggleGroup.Item>

                  <ToggleGroup.Item
                    value="3"
                    className={`text-white font-bold w-11 h-11 rounded ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                    title="Quarta">Q</ToggleGroup.Item>

                  <ToggleGroup.Item
                    value="4"
                    className={`text-white font-bold w-11 h-11 rounded ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                    title="Quinta">Q</ToggleGroup.Item>

                  <ToggleGroup.Item
                    value="5"
                    className={`text-white font-bold w-11 h-11 rounded ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                    title="Sexta">S</ToggleGroup.Item>

                  <ToggleGroup.Item
                    value="6"
                    className={`text-white font-bold w-11 h-11 rounded ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                    title="Sábado">S</ToggleGroup.Item>

                </ToggleGroup.Root>
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <label className="font-semibold" htmlFor="hourStart">Qual horário do dia?</label>
                <div className="grid grid-cols-2 gap-2">
                  <Input className="text-white text-xs" name="hourStart" id="hourStart" type="time" placeholder="De" />
                  <Input name="hourEnd" id="hourEnd" type="time" placeholder="Até" />
                </div>
              </div>
            </div>

            <label className="mt-2 flex gap-2 text-sm items-center">
              <Checkbox.Root
                checked={useVoip}
                onCheckedChange={(checked) => {
                  checked === true ? setVoip(true) : setVoip(false)
                }} className="h-6 w-6 px-[2px] bg-zinc-900 rounded" >
                <Checkbox.Indicator>
                  <Check className="h-5 w-5 text-emerald-400" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              Costumo me conectar ao chat de voz
            </label>

            <footer className="mt-4 flex justify-end gap-4">
              <Dialog.Close
                className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
                type="button">Cancelar</Dialog.Close>
              <button
                className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
                type="submit">
                <GameController size={24} />
                Encontrar duo
              </button>
            </footer>

          </form>

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}