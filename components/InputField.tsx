import {TextInput, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { inputStyles } from '../constants';


const InputField = ({ icon, placeholder }: { icon: string, placeholder: string }) => {
  return (
    <View style={{ paddingVertical: 20 }}>
    <View style={inputStyles.userField}>
      <AntDesign name={icon} size={30} color="#0ab99c" />
      <TextInput
        style={inputStyles.inpBox}
        placeholder={placeholder}    
      />
    </View>
  </View>
  )
}

export default InputField