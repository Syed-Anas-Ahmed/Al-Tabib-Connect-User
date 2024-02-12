import {
  Button,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import { AntDesign } from "@expo/vector-icons";
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
} from "react-native-alert-notification";
import DateTimePicker, { DateType } from "react-native-ui-datepicker";
import dayjs from "dayjs";
import { BlurView } from "expo-blur";

const RegisterScreen = () => {
  //const navigation = useNavigation();
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const [datevalue, setdateValue] = useState<DateType>(dayjs());
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(false);

  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ]);

  const validatePhoneNumber = (number: string) => {
    const reg = /^\d$/;
    setNumber(number);
    if (reg.test(number) === false && number.length < 11) {
      {
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: "Error",
          textBody: "Insert Correct phone Number",
          button: "close",
        });
      }
      return false;
    } else {
      console.log("number: ", number);
      console.log("name: ", name);
      console.log("datevalue: ", dayjs(datevalue).format("MMMM DD, YYYY"));
      console.log("Gender: ", value);
      gotoOtp();
    }
  };

  const gotoOtp = () => {
    //navigation.navigate("Otp");
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={theme? styles.heading: styles.headingDark}>Welcome!</Text>
        <Text style={styles.subtitle}>
          Enjoy all the features that make it easy for you to manage your Doctor
          Appointments
        </Text>
        <View style={{ paddingVertical: "20%" }}>
          <View style={{ paddingBottom: 10 }}>
            <View style={styles.userField}>
              <MaterialCommunityIcons
                name="phone-dial"
                size={30}
                color="#ec1c24"
              />
              <TextInput
                style={styles.emBox}
                placeholder="Enter Phone number"
                keyboardType="number-pad"
                value={number}
                onChange={(e) => setNumber(e.nativeEvent.text)}
              />
            </View>
          </View>
          <View style={{ paddingVertical: 10 }}>
            <View style={styles.userField}>
              <AntDesign name="user" size={30} color="#ec1c24" />
              <TextInput
                style={styles.emBox}
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.nativeEvent.text)}
              />
            </View>
          </View>
          <View style={{ paddingVertical: 10 }}>
            <View style={styles.userField}>
              <AntDesign name="calendar" size={30} color="#ec1c24" />
              <Pressable
                style={styles.button}
                onPress={() => setShowModal(!showModal)}
              >
                <Text style={styles.buttonText}>{dayjs(datevalue).format('MMMM DD, YYYY')}</Text>
              </Pressable>
              <Modal
                transparent={true}
                visible={showModal}
                animationType="fade"
                onRequestClose={() => setShowModal(false)}
              >
                <BlurView
                  style={styles.modalBlurContainer}
                  experimentalBlurMethod="dimezisBlurView"
                >
                  <View style={styles.modalContainer}>
                    <DateTimePicker
                      selectedItemColor="#ec1c24"
                      value={value}
                      locale={"en"}
                      onValueChange={(date) => setdateValue(date)}
                      mode="date"
                    />
                    <View style={styles.footerContainer}>
                      {/* Button to close modal */}
                      <Pressable
                        onPress={() => setShowModal(false)}
                        style={styles.closeButton}
                      >
                        <Text style={styles.closeButtonText}>Close</Text>
                      </Pressable>
                    </View>
                  </View>
                </BlurView>
              </Modal>
            </View>
          </View>
          <View style={{ paddingVertical: 10 }}>
            <View style={styles.userField}>
              <MaterialCommunityIcons
                name="gender-male"
                size={30}
                color="#ec1c24"
              />
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="Select Gender"
                containerStyle={{ height: 40, flex: 1 }}
                style={{
                  marginLeft: 10,
                  flex: 1,
                  borderColor: "#ec1c24",
                  borderBottomWidth: 2,
                  borderWidth: 0,
                  borderRadius: 0,
                }}
                labelStyle={{
                  color: "black",
                  fontSize: 14,
                  fontFamily: "PoppinsRegular",
                }}
                dropDownContainerStyle={{
                  borderColor: "#ec1c24",
                  borderWidth: 2,
                  borderRadius: 10,
                  width: "105%",
                }}
                closeAfterSelecting={true}
                TickIconComponent={() => (
                  <MaterialCommunityIcons
                    name="check"
                    size={24}
                    color="#ec1c24"
                  />
                )}
                placeholderStyle={{ color: "gray", fontSize: 16 }}
                listItemLabelStyle={{ color: "red", fontSize: 16 }}
              />
            </View>
          </View>
        </View>
        <AlertNotificationRoot>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => validatePhoneNumber(number)}
          >
            <Text style={styles.loginText}>Register</Text>
          </TouchableOpacity>
        </AlertNotificationRoot>

        <View style={styles.register}>
          <Text style={{ fontFamily: "PoppinsRegular" }}>
            Already have an account?
          </Text>
          <TouchableOpacity>
            <Text style={styles.registerText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  safeContainer: {
    flex:1,
    width: "100%",
    backgroundColor: "#39b368",
    paddingTop: 30,
  },
  safeContainerDark: {
    flex:1,
    width: "100%",
    backgroundColor: "black",
    paddingTop: 30,
  },
  container: {
    padding: "7%",
  },
  heading: {
    paddingVertical: 5,
    fontSize: 36,
    fontFamily: "PoppinsMedium",
    color: "#ec1c24",
  },
  headingDark: {
    paddingVertical: 5,
    fontSize: 36,
    fontFamily: "PoppinsMedium",
    color: "white",
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "PoppinsRegular",
  },
  userField: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  emBox: {
    marginLeft: 10,
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: "#ec1c24",
    marginTop: 30,
    fontFamily: "PoppinsRegular",
  },
  loginBtn: {
    backgroundColor: "#ec1c24",
    paddingVertical: "2%",
    borderRadius: 10,
    marginTop: 20,
    alignSelf: "center",
    width: "100%",
    alignItems: "center",
  },
  loginText: {
    color: "white",
    fontSize: 18,
    fontFamily: "PoppinsMedium",
  },
  googleText: {
    color: "black",
    fontSize: 16,
    fontFamily: "PoppinsMedium",
  },
  register: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    gap: 5,
    paddingVertical: 20,
  },
  registerText: {
    color: "#ec1c24",
    fontFamily: "PoppinsRegular",
  },
  buttonContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    flex: 1,
    backgroundColor: "#ec1c24", // Adjust as needed
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 10,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: "center",
    color: "white", // Adjust as needed
    fontSize: 16,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  modalContainer: {
    //flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "rgba(0, 0, 0, 0)", // Semi-transparent background
  },
  closeButton: {
    alignSelf: "center",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#ec1c24", // Adjust as needed
  },
  closeButtonText: {
    color: "white", // Adjust as needed
    fontSize: 16,
  },
  modalBlurContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
