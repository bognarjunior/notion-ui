import { View, Text, TouchableOpacity, } from 'react-native';
import React from 'react';

import { Feather } from '@expo/vector-icons';

import { theme } from '@/theme';
import { styles } from './styles';

const { colors } = theme;
type Props = {
  title: string;
}

export default function Page({ title }: Props) {
  return (
    <View style={styles.container}>
      <Feather name="chevron-right" size={20} color={colors.Gray[300]} />
      <Feather name="file-text" size={20} color={colors.Gray[300]} />
      
      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity>
        <Feather name="plus" size={20} color={colors.Gray[300]} />
      </TouchableOpacity>

    </View>
  )
}