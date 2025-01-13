import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';

import { Feather } from '@expo/vector-icons';

import Page from '@/components/page';

import { theme } from '@/theme';
import { styles } from './styles';

const { colors } = theme

type Props = {
  data: {
    id: string;
    title: string;
  }[]
}

export default function PageList({ data }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Privado</Text>
        <TouchableOpacity>
          <Feather  name="more-horizontal" size={24} color={colors.Gray[300]} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Feather  name="plus" size={24} color={colors.Gray[300]} />
        </TouchableOpacity>

      </View>

      <FlatList 
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Page title={item.title} />
        )}
        showsVerticalScrollIndicator={false}
        style={styles.list}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        scrollEnabled={false}
      />

    </View>
  )
}