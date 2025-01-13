import { View, Text, Image,TouchableOpacity } from 'react-native';
import React from 'react';

import { Feather } from '@expo/vector-icons';

import { theme } from '@/theme';
import { styles } from './styles';

const { colors } = theme

type Props = {
  data: {
    title: string;
    cover?: string;
  }
}


export default function Recent({ data }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: data.cover }} style={styles.cover} />

      <View style={styles.content} >
        <Feather name="file-text" size={32} color={colors.Gray[300]} style={styles.icon} />
      
        <Text style={styles.title} numberOfLines={2}>{data.title}</Text>
      </View>
    </TouchableOpacity>
  )
}