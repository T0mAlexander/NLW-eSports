import { CaretDown, CheckCircle } from 'phosphor-react'
import * as Select from '@radix-ui/react-select';
import { styled } from '@stitches/react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const triggerStyle = styled(Select.Trigger, {
  '&[data-placeholder]': { color: '#717a74' },
  backgroundColor: '#18181B',
  display: 'inline-flex',
  scrollbarWidth: 'none',
  padding: '12px 16px',
  borderRadius: '4px',
  justifyContent: 'space-between',
  height: '100%',
  width: '100%'
})

const contentStyle = styled(Select.Content, {
  overflow: 'auto',
  backgroundColor: '#18181B',
  padding: '12px 16px',
  border: '1px solid #71717A',
  borderRadius: '4px',
  justifyContent: 'space-around',
})

const itemStyle = styled(Select.Item, {
  color: '#FFF',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  height: 35,
  textIndent: '10px',

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

export default function Dropdown() {
  const [game, setGames] = useState<Game[]>([])

  useEffect(() => {
    axios('http://localhost:3000/games').then(response => {
      setGames(response.data)
    })
  }, [])

  return (
    <Select.Root name="game">
      <SelectTrigger>
        <Select.Value placeholder="Selecione o game que deseja jogar" />
        <CaretDown size={22} color="#A1A1AA" />
      </SelectTrigger>
      <Select.Portal>
        <SelectContent>
          <Select.Viewport>
            {game.map(game => {
              return (
                <SelectItem value={game.id} key={game.id}>
                  <Select.ItemText>{game.title}</Select.ItemText>
                  <SelectItemIndicator>
                    <CheckCircle size={19} color="#34D399" />
                  </SelectItemIndicator>
                </SelectItem>
              )
            })}
          </Select.Viewport>
        </SelectContent>
      </Select.Portal>
    </Select.Root>
  )
}
