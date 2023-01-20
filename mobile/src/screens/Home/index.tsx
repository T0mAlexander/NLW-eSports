import { Image, FlatList } from 'react-native';
import { styles } from './styles';
import logoImg from '../../assets/logo-nlw-esports.png'
import { Header } from '../../components/Header';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/native'


export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([])

  const nav = useNavigation()

  function gameSelected({id, title, bannerUrl}: GameCardProps) {
    nav.navigate('game', {id, title, bannerUrl})
  }

  //* Informações do backend
  useEffect(() => { 
    fetch('http://192.168.18.26:3000/games')
      .then(response => response.json())
      .then(data => setGames(data))
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />
        <Header title="Encontre seu duo!" subtitle="Selecione o game que deseja jogar ..." />
        <FlatList data={games} keyExtractor={item => item.id} renderItem={({ item }) => (
          <GameCard data={item} onPress={() => gameSelected(item)} />
        )}
          horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.contentList} />
      </SafeAreaView>
    </Background>
  );
}