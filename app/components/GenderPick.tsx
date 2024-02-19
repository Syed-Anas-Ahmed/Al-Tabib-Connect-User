import React, { useState } from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { inputStyles, genderPicker } from '../constants';

interface GenderPickProps {
  onGenderChange: (gender: string) => void; // Define the onGenderChange prop
}

const GenderPick: React.FC<GenderPickProps> = ({ onGenderChange }) => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ]);
  const [open, setOpen] = useState(false);

  const handleGenderChange = (gender: string) => {
    setValue(gender);
    onGenderChange(gender);
  };

  return (
    <View style={{ paddingVertical: 5 }}>
      <View style={inputStyles.userField}>
        <MaterialCommunityIcons name="gender-male" size={20} color="#0ab99c" />
      </View>
    </View>
  );
};

export default GenderPick;
