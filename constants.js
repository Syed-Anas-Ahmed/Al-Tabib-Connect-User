import { StyleSheet } from "react-native";

export const fonts = StyleSheet.create({
  heading: {
    textAlign: "center",
    fontFamily: "PoppinsSemiBold",
    fontSize: 32,
  },
  sub: {
    textAlign: "center",
    fontFamily: "PoppinsRegular",
    fontSize: 20,
  },
  normal: {
    textAlign: "center",
    fontFamily: "PoppinsRegular",
    fontSize: 18,
  },
});

export const FontColors = StyleSheet.create({
  primaryFont: {
    color: "#0ab99c",
  },
  primaryDark: {
    color: "#016b5a",
  },
  whiteFont: {
    color: "white",
  },
  blackFont: {
    color: "black",
  },
});

export const paddings = StyleSheet.create({
  primaryPad: {
    paddingHorizontal: 15,
  },
});

export const corners = StyleSheet.create({
  rounded: {
    borderRadius: 10,
  },
});

export const containers = StyleSheet.create({
  fullScreen: {
    flex: 1,
    width: "100%",
  },
});

export const gradient = StyleSheet.create({
  linear: {
    gap: 25,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export const themeColors = StyleSheet.create({
  primary: {
    backgroundColor: "#0ab99c",
  },
  primaryDark: {
    backgroundColor: "#016b5a",
  },
  white: {
    backgroundColor: "white",
  },
  black: {
    backgroundColor: "black",
  },
});

export const inputStyles = StyleSheet.create({
  userField: {
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inpBox: {
    fontFamily: "PoppinsRegular",
    borderBottomColor: "#0ab99c",
    borderBottomWidth: 2,
    flex: 1,
    fontSize: 18,
  },
});
export const genderPicker = StyleSheet.create({
  styling: {
    flex: 1,
    borderColor: "#0ab99c",
    borderBottomWidth: 2,
    borderWidth: 0,
    borderRadius: 0,
  },
  containerStyle: {
    height: 40,
    flex: 1,
  },
  labelStyle: {
    color: "gray",
    fontSize: 18,
    fontFamily: "PoppinsRegular",
  },
  dropDownContainerStyle: {
    borderColor: "#0ab99c",
    borderWidth: 2,
    borderRadius: 10,
    width: "100%",
  },
  placeholderStyle: {
    color: "gray",
    fontSize: 16,
    fontFamily: "PoppinsRegular",
  },
  listItemLabelStyle: {
    color: "#0ab99c",
    fontSize: 16,
    fontFamily: "PoppinsRegular",
  },
});

export const dateModal = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: "#0ab99c",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  modalContainer: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    alignSelf: "center",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#0ab99c",
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
  },
  modalBlurContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const form = StyleSheet.create({
    layout: {
      paddingVertical: 15,
      justifyContent: "center",
      paddingHorizontal: 15,
      backgroundColor: "white",
      width: "100%",
      borderRadius: 10,
    }
  });
export const btns = StyleSheet.create({
    btnPrimary: {
        padding: 20,
        borderRadius: 10,
      },
  });

  