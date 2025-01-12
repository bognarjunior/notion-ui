import React from 'react';

import { Tabs } from 'expo-router';
import { styles } from './styles';
import { StatusBar } from 'react-native';
import { theme } from '@/theme';
import { Feather } from '@expo/vector-icons';

const { colors } = theme;

export default function TabsLayout() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
      <Tabs 
        screenOptions={{
          sceneStyle: styles.default,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.Gray[100],
          tabBarInactiveTintColor: colors.Gray[400],
          tabBarStyle: styles.tabBarStyle
        }}
      >
        <Tabs.Screen 
          name="index" 
          options={{ 
            tabBarIcon: ({color, size}) => (<Feather name="home" size={size} color={color} />) 
          }}
        />
        <Tabs.Screen 
          name="search" 
          options={{ 
            tabBarIcon: ({color, size}) => (<Feather name="search" size={size} color={color} />) 
          }}
        />
        <Tabs.Screen 
          name="notifications" 
          options={{ 
            tabBarIcon: ({color, size}) => (<Feather name="inbox" size={size} color={color} />), 
            tabBarBadge: 3,
            tabBarBadgeStyle: {
              backgroundColor: colors.Red[300],
              borderRadius: 5
            } 
          }}
        />
        <Tabs.Screen 
          name="edit" 
          options={{ 
            tabBarIcon: ({color, size}) => (<Feather name="edit" size={size} color={color} />) 
          }}
        />
      </Tabs>
    </>
  )
}