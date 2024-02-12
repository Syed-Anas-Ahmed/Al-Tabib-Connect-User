import { TouchableOpacity, Text, View } from 'react-native';
import React from 'react';
import { themeColors,btns } from '../constants';

const CusButton = ({ btnText }: { btnText: string }) => {

  return (
    <View>
      <TouchableOpacity
        style={[themeColors.primary,btns.btnPrimary]}
      >
        <Text style={{ textAlign: 'center', fontSize: 20, color: '#FFFFFF' }}>
          {btnText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CusButton;