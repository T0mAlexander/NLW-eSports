import React, { useState } from 'react';
import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from "@expo/vector-icons";
import { THEME } from '../../theme/index';
import { Activity, CheckCircle, Copy } from "phosphor-react-native";
import { Header } from '../Header';
import * as Clipboard from 'expo-clipboard'

interface Properties extends ModalProps {
  discord: string
  onClose: () => void
}

export function DuoMatch({ discord, onClose, ...rest }: Properties) {
  const [CopyProgress, SetCopyProgress] = useState(false)

  async function copyDiscordToCliboard () {
    SetCopyProgress(true)
    await Clipboard.setStringAsync(discord)
    Alert.alert('Discord copiado!', 'A tag do Discord do usuário foi copiada')
    SetCopyProgress(false)
  }

  return (
    <Modal {...rest} transparent statusBarTranslucent animationType='fade'>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <MaterialIcons name='close' size={20} color={THEME.COLORS.CAPTION_500} />
          </TouchableOpacity>
          <CheckCircle size={64} color={THEME.COLORS.SUCCESS} weight='bold' />
          <Header title='Let’s play!' subtitle='Agora é só começar a jogar!' style={{alignItems: 'center', marginTop: 24 }} />
          <Text style={styles.label}>Adicione no Discord</Text>
          <TouchableOpacity style={styles.discordButton} onPress={copyDiscordToCliboard} disabled={CopyProgress}>
            <Text style={styles.discord}>{CopyProgress ? <ActivityIndicator color={THEME.COLORS.PRIMARY} /> : discord }</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}
