import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { theme } from '@/theme';

const { colors } = theme;

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://github.com/bognarjunior.png" }} style={styles.image} />
      <View style={styles.user}>
        <Text style={styles.name}>Bognar Junior</Text>
        <Text style={styles.email}>bognar_junior@yahoo.com.br</Text>
      </View>
      <TouchableOpacity>
        <Feather name="more-horizontal" size={24} color={colors.Gray[100]} />
      </TouchableOpacity>
    </View>
  )
}