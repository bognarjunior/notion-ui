import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Header from '@/components/header'

export default function Home() {
  return (
    <View style={styles.containerHome}>
      <Header />
    </View>
  )
}