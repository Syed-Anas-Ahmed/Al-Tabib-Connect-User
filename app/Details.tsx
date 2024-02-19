import { Stack } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'tamagui';


export default function Details() {

  return (
    <View>
      <Stack.Screen options={{ title: 'Details' }} />
      <Text>Hekko</Text>
    </View>
  );
}