import {KeyboardTypeOptions, TextInput, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { inputStyles } from '../constants';

interface InputFieldProps {
  icon: string;
  placeholder: string;
  keyBrdTyp: KeyboardTypeOptions;
  secure: boolean;
  onChangeText: (text: string) => void;
  maxLength?: number;
}


const InputField: React.FC<InputFieldProps> = ({ icon, placeholder, keyBrdTyp, secure, onChangeText, maxLength }) => {
  return (
    <View style={{ paddingVertical: 20 }}>
    <View style={inputStyles.userField}>
      <AntDesign name={icon} size={20} color="#0ab99c" />
      <TextInput
        style={inputStyles.inpBox}
        placeholder={placeholder}
        keyboardType={keyBrdTyp} 
        secureTextEntry={secure}
        onChangeText={onChangeText}
        autoCapitalize='none'
        maxLength={maxLength}
      />
    </View>
  </View>
  )
}

export default InputField