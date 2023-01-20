import { Text, TouchableOpacity, View } from 'react-native';
import { DuoInfo } from '../DuoInfo';
import { styles } from './styles';
import { GameController } from 'phosphor-react-native'
import React from 'react';
import { THEME } from '../../theme';

export interface DuoCardProps {
  hourEnd: string
  hourStart: string
  id: string 
  name: string
  useVoip: boolean 
  weekDays: string[]
  yearsPlaying: number
}

interface Properties {
  data: DuoCardProps
  onConnect: () => void
}

export function DuoCard({ data, onConnect }: Properties) {
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value={data.name} />
      <DuoInfo label="Tempo de jogo" value={data.yearsPlaying > 1 ? `${data.yearsPlaying} anos` : `${data.yearsPlaying} ano`} />
      <DuoInfo label="Disponibilidade" value={`${data.weekDays.length < 2 ? `${data.weekDays.length} dia`: `${data.weekDays.length} dias` } \u2022 ${data.hourStart}h - ${data.hourEnd}h`} />
      <DuoInfo 
      label="Chamada de aúdio?" 
      value={data.useVoip ? 'Sim' : 'Não'} 
      colorValue={data.useVoip ? '#34D399' : '#F87171' }/>

      <TouchableOpacity style={styles.button} onPress={onConnect} >
        <GameController color={THEME.COLORS.TEXT} size={20}/>
        <Text style={styles.buttonText}>Conectar</Text>
      </TouchableOpacity>
    </View>
  )
}