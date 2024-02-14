import React, { useState } from 'react';
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
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
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={handleGenderChange} 
          setItems={setItems}
          placeholder="Select Gender"
          containerStyle={genderPicker.containerStyle}
          style={genderPicker.styling}
          labelStyle={genderPicker.labelStyle}
          dropDownContainerStyle={genderPicker.dropDownContainerStyle}
          closeAfterSelecting={true}
          TickIconComponent={() => (
            <MaterialCommunityIcons name="check" size={24} color="#0ab99c" />
          )}
          placeholderStyle={genderPicker.placeholderStyle}
          listItemLabelStyle={genderPicker.listItemLabelStyle}
        />
      </View>
    </View>
  );
};

export default GenderPick;
