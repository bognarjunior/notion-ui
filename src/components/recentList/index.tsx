import { View, Text, FlatList } from 'react-native';
import React from 'react';

import Recent from '@/components/recent';

import { styles } from './styles';


type Props = {
  data: {
    id: string;
    title: string;
    cover?: string;
  }[]
}

export default function RecentList({ data }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recentes</Text>

      <FlatList 
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Recent data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}