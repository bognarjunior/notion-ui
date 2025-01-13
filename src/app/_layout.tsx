import { StatusBar } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

export default function _layout() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
      <Stack screenOptions={{ headerShown: false }} />
  </>
  )

}