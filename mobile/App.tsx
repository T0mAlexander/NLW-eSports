import React, { useRef, useEffect } from 'react'
import { StatusBar } from 'react-native'
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter'
import { Background } from './src/components/Background'
import Routes from './src/routes'
import { Loading } from './src/components/Loading';
import './src/services/notificationConfig'
import { getPushNotificationToken } from "./src/services/getPushNotificationToken";
import { Subscription } from 'expo-modules-core'
import * as Notifications from 'expo-notifications';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

  const getNotificationListener = useRef<Subscription>()
  const responseNotificationsListener = useRef<Subscription>()

  useEffect(() => {
    getPushNotificationToken()
  })

  useEffect(() => {
    getNotificationListener.current = Notifications
      .addNotificationReceivedListener(notification => {
        console.log(notification)
      })

    responseNotificationsListener.current = Notifications.addNotificationReceivedListener(response => {
      console.log(response)
    })

    return () => {
      if (getNotificationListener.current && responseNotificationsListener.current) {
        Notifications.removeNotificationSubscription(getNotificationListener.current)
        Notifications.removeNotificationSubscription(responseNotificationsListener.current)
      }
    }
  }, [])

  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor='transparent' translucent />
      {fontsLoaded ? <Routes /> : <Loading />}
    </Background>
  );
}
