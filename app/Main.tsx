import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Main = () => {
  return (
    <View>
      <Text>Main</Text>
      <Link href='/Login' asChild>
        <TouchableOpacity>
          <Text>Go to details</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Main;
