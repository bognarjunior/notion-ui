import { View } from 'react-native';
import React from 'react';

import Header from '@/components/header';
import RecentList from '@/components/recentList';

import { DATA } from '@/utils/data';

import { styles } from './styles';

export default function Home() {
  return (
    <View style={styles.containerHome}>
      <Header />
      <RecentList data={DATA.RECENT} />
    </View>
  )
}