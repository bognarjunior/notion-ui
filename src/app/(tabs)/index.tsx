import { View, ScrollView } from 'react-native';
import React from 'react';

import Header from '@/components/header';
import RecentList from '@/components/recentList';
import PageList from '@/components/pageList';

import { DATA } from '@/utils/data';

import { styles } from './styles';

export default function Home() {
  return (
    <View style={styles.containerHome}>
      <Header />
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
      >
        <RecentList data={DATA.RECENT} />
        <PageList data={DATA.PAGES} />
      </ScrollView>
    </View>
  )
}