import { color } from "@tamagui/themes";
import { StyleSheet } from "react-native";

const colors = {
  primary: "#4E54DA",
  gradPrim: "#4e55da8d",
  gradSec: "#00be9e60",
  black: "#525252",
  white: "#ffffff",
  labelGray: "#8a8a8a",
  linkBlue: "#00a2ff",
  yellow: "#ffa600",
};
export { colors };


const fontsFams ={
    poppinsExtraBold:"Poppins",
    poppinsRegular:"PoppinsRegular",
    poppinsSemiBold:"PoppinsSemiBold",
    poppinsMedium:"PoppinsMedium",
}
export {fontsFams};

const fontSizes = {
  XL: 32,
  L: 22,
  M: 18,
  SM: 16,
  XSM: 12,
};
export { fontSizes };

const buttons = StyleSheet.create({
  primaryBtn: {
    //flex:1,
    borderRadius: 5,
    backgroundColor: colors.primary,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
export {buttons};

const textStyles = StyleSheet.create({
  heading: {
    fontFamily: fontsFams.poppinsSemiBold,
    color: colors.black,
    fontSize: fontSizes.XL,
  },
    subHeading: {
        fontFamily:fontsFams.poppinsRegular,
        color: colors.black,
        fontSize: fontSizes.L,
    },
    normal: {
        fontFamily: fontsFams.poppinsRegular,
        color: colors.labelGray,
        fontSize: fontSizes.SM,
    },
    subNormal: {
        fontFamily: fontsFams.poppinsRegular,
        color: colors.black,
        fontSize: fontSizes.SM,
    },
    small: {
        fontFamily: fontsFams.poppinsRegular,
        color: colors.black,
        fontSize: fontSizes.XSM,
    },
    whiteFont: {
        fontFamily: fontsFams.poppinsRegular,
        color: colors.white,
    },
});
export {textStyles};

