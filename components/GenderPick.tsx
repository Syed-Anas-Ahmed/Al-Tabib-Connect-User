import {View } from 'react-native'
import React, { useState } from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import DropDownPicker from 'react-native-dropdown-picker'
import { inputStyles,genderPicker } from '../constants';


const GenderPick = () => {
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
    ]);
    const [open, setOpen] = useState(false);
  return (
    <View style={{ paddingVertical: 5 }}>
    <View style={inputStyles.userField}>
      <MaterialCommunityIcons
        name="gender-male"
        size={30}
        color="#0ab99c"
      />
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
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
  )
}
export default GenderPick
