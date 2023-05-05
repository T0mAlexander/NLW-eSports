import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import { styles } from './styles';
import { useRoute, useNavigation } from '@react-navigation/native'
import { GameParams } from '../../@types/nav';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Entypo } from '@expo/vector-icons'
import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png'
import { Header } from '../../components/Header';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { Text } from 'react-native';
import { DuoMatch } from '../../components/DuoMatch';


export function Game() {
  const [duo, setDuo] = useState<DuoCardProps[]>([])
  const [DuoChoosed, SetDuoChoosed] = useState('')

  const nav = useNavigation()
  const route = useRoute()
  const game = route.params as GameParams
  function returnToHome() {
    nav.goBack()
  }

  //? Troque o 192.168.0.0 pelo IPV4 da sua máquina
  async function getDiscordUser (adsId: string) {
    fetch(`http://192.168.0.0:3000/ads/${adsId}/discord`)
    .then(response => response.json())
    .then(data => SetDuoChoosed(data.discord) )
  }

  //* Backend API Connection
  useEffect(() => {
    fetch(`http://192.168.0.0:3000/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => setDuo(data))
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Entypo onPress={returnToHome} name="chevron-thin-left" color={THEME.COLORS.CAPTION_300} size={25} />
          </TouchableOpacity>
          <Image source={logoImg} style={styles.logo} />
          <View style={styles.invisibleRight} />
        </View>
        <Image source={{ uri: game.bannerUrl }} style={styles.banner} resizeMode="cover" />
        <Header title={game.title} subtitle="Conecte-se e comece a jogar" />
        <FlatList data={duo} keyExtractor={item => item.id} renderItem={({ item }) => (
          <DuoCard data={item} onConnect={() => getDiscordUser(item.id)} />
        )} horizontal showsVerticalScrollIndicator={false} style={styles.containerList} 
          contentContainerStyle={[duo.length > 0 ? styles.contentList : styles.emptyListContent]} 
          ListEmptyComponent={() => (
          <Text style={styles.emptyListText} >
            Não há anúncios publicados ainda
          </Text>
        )} />

        <DuoMatch onClose={() => SetDuoChoosed('')} visible={DuoChoosed.length > 0} discord={DuoChoosed} />
      </SafeAreaView>
    </Background>
  );
}
