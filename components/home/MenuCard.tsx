import { Dimensions, Image, Pressable, Text, View } from "react-native";
import React from "react";
import { FontColors, fonts } from "../../constants";

const cardWidth = Dimensions.get('screen').width*0.43;

interface InputFieldProps {
  icon: string;
  text: string;
}

const MenuCard: React.FC<InputFieldProps> = ({ icon, text }) => {
  return (
    <Pressable onPress={()=>console.log("Pressed")}>
    <View
      style={{
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "space-around",
        borderRadius:5,
        padding:5
      }}
    >
        <Image source={icon} style={{width:cardWidth,height:cardWidth}}/>
        <Text style={[fonts.normalBold,FontColors.primaryFont]}>{text}</Text>
    </View>
    </Pressable>
  );
};

export default MenuCard;