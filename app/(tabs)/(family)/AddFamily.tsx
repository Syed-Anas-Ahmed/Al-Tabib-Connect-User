import { AntDesign, Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import {
  Dimensions,
  Keyboard,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker, { DateType } from "react-native-ui-datepicker";
import { Card, Separator, XStack, YStack } from "tamagui";
import GenderPick from "~/app/components/GenderPick";
import MenuBar from "~/app/components/MenuBar";
import { FontColors, fonts } from "~/app/constants";
import { buttons, colors } from "~/app/styles";
import * as Progress from "react-native-progress";
import { useState } from "react";
import dayjs from "dayjs";
import { ALERT_TYPE, Dialog } from "react-native-alert-notification";
import { router } from "expo-router";
import axios from "axios";
import { url } from "~/env";
import { color } from "@tamagui/themes";

const screenwidth = Dimensions.get("screen").width;

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  const [date, setDate] = useState<DateType>(dayjs());
  const [isModalVisible, setIsModalVisible] = useState(false);

  const currDate = date ? dayjs(date).format("YYYY-MM-DD") : "Date of Birth";

  const isEmptyString = (str: string) => str.trim() === "";

  const emptyFields = (name: string, gender: string, date: string) =>
    ![name, gender, date].some(isEmptyString);

  const validateSubmit = (name: string, gender: string, date: string) =>
    emptyFields(name, gender, date);

  const handleGenderChange = (selectedGender: string) =>
    setGender(selectedGender);
  const handleNameChange = (name: string) => setName(name);

  const handleSubmit = () => {
    if (!validateSubmit(name, gender, currDate)) {
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: "Error",
        textBody: "Please fill all details correctly",
        button: "Close",
      });
    } else {
      setLoading(true);
      addPatientData();
    }
  };

  const patient = {
    id: 1,
    name: `${name}`,
    gender: `${gender}`,
    dob: `${currDate}`,
  };

  const encodedPatient = encodeURIComponent(JSON.stringify(patient));

  const uri = url;

  const loginUrl = `${uri}addPatient?token=1658565880764af890c50-05ed-4f97-a7cc-82e2266e0655&patient=${encodedPatient}`;

  const addPatientData = () => {
    axios
      .get(loginUrl)
      .then((response) => {
        if (response.status === 200) {
          console.log(
            "RESPONSE STATUS: ",
            JSON.stringify(response.status, null, 2),
          );
          console.log(
            "TOKEN: ",
            //JSON.stringify(response.data.data.token, null, 2),
          );
          setLoading(false);
          Dialog.show({
            type: ALERT_TYPE.SUCCESS,
            title: "Family member added",
            textBody: "Your family member was added successfully!",
            button: "Close",
            onPressButton() {
              router.push("/(tabs)/(family)/Family");
            },
          });
        } else {
          console.log("Error, Status code: ", response.status);
          setLoading(false);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.error("Server Error:", error.response.data);
          console.error("Status Code:", error.response.status);
          console.error("Headers:", error.response.headers);
          setLoading(false);
        } else if (error.request) {
          console.error("No response received:", error.request);
          setLoading(false);
        } else {
          console.error("Request Error:", error.message);
          setLoading(false);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: colors.primary, flex: 1, paddingHorizontal: 10 }}
    >
      <MenuBar title="Add Family Member" />
      <Card
        unstyled
        justifyContent="center"
        width={"100%"}
        padding={10}
        gap={15}
        flex={1}
        alignItems="center"
        //backgroundColor={"#eeeeee"}
      >
        <Text style={{ fontSize: 24, color: colors.white }}>
          Please fill out the details
        </Text>
        <YStack
          justifyContent="center"
          borderRadius={10}
          padding={15}
          backgroundColor={"white"}
          gap={15}
          width={"100%"}
        >
          {loading
            ? (Keyboard.dismiss(),
              (
                <View
                  style={{
                    borderColor: "lightgray",
                    borderRadius: 10,
                    borderWidth: 2,
                    alignSelf: "center",
                    position: "absolute",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                    zIndex: 1000,
                    gap: 20,
                    height: screenwidth * 0.75,
                    width: screenwidth * 0.75,
                  }}
                >
                  <Text style={[fonts.headingSmall, FontColors.primaryFont]}>
                    Logging In
                  </Text>
                  <Progress.CircleSnail
                    thickness={7}
                    size={100}
                    color={["#0ab99c", "#0044ff", "#ffa600"]}
                  />
                </View>
              ))
            : null}
          <XStack
            borderColor={"#ebebeb"}
            borderWidth={1}
            gap={10}
            backgroundColor={"white"}
            borderRadius={5}
            padding={10}
          >
            <AntDesign name="user" size={24} color={colors.primary} />
            <Separator vertical borderColor={"lightgray"} />
            <TextInput
              style={{ padding: 0, flex: 1, fontFamily: "PoppinsRegular" }}
              placeholder="Enter Name"
              onChangeText={handleNameChange}
              placeholderTextColor="#808080a4"
              textContentType="name"
            />
          </XStack>
          <XStack
            borderColor={"#ebebeb"}
            borderWidth={1}
            zIndex={100}
            gap={10}
            backgroundColor={"white"}
            borderRadius={5}
            padding={10}
            alignItems="center"
          >
            <AntDesign name="calendar" size={24} color={colors.primary} />
            <Separator alignSelf="stretch" vertical borderColor={"lightgray"} />

            {/* DATE PICKER */}

            <TouchableOpacity
              style={[buttons.primaryBtn, { flex: 1 }]}
              onPress={() => setIsModalVisible(true)}
            >
              <Text style={{ color: "white", fontFamily: "ArialB" }}>
                {date ? dayjs(date).format("MMMM DD, YYYY") : "Date of Birth"}
              </Text>
            </TouchableOpacity>
          </XStack>
          <XStack
            borderColor={"#ebebeb"}
            borderWidth={1}
            zIndex={100}
            gap={10}
            backgroundColor={"white"}
            ai="center"
            borderRadius={5}
            padding={10}
          >
            <Ionicons name="male-female" size={24} color={colors.primary} />
            <Separator als={"stretch"} vertical borderColor={"lightgray"} />
            <GenderPick genvalue={gender} onGenderChange={handleGenderChange} />
          </XStack>

          <TouchableOpacity onPress={handleSubmit} style={[buttons.primaryBtn]}>
            <Text style={[fonts.sub, FontColors.whiteFont]}>Add</Text>
          </TouchableOpacity>
          {/* MODAL */}

          <Modal
            transparent={true}
            visible={isModalVisible}
            onRequestClose={() => setIsModalVisible(false)}
            animationType="fade"
          >
            <BlurView
              style={{
                padding: 15,
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
              experimentalBlurMethod="dimezisBlurView"
            >
              <View
                style={{
                  backgroundColor: "white",
                  padding: 10,
                  borderRadius: 10,
                }}
              >
                <DateTimePicker
                  dayContainerStyle={{
                    borderWidth: 2,
                    borderRadius: 10,
                    borderColor: "#f3f3f3",
                  }}
                  headerButtonStyle={{
                    backgroundColor: "white",
                    borderRadius: 7,
                  }}
                  headerContainerStyle={{
                    paddingHorizontal: 5,
                    backgroundColor: "#4E54DA",
                    borderRadius: 10,
                  }}
                  headerTextStyle={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                  headerButtonColor="#4E54DA"
                  selectedItemColor="#4E54DA"
                  mode="single"
                  date={date}
                  onChange={(date) => setDate(date.date)}
                />
                <XStack>
                  <TouchableOpacity
                    style={[buttons.primaryBtn, { flex: 1 }]}
                    onPress={() => setIsModalVisible(false)}
                  >
                    <Text style={{ color: "white", fontFamily: "ArialB" }}>
                      Close
                    </Text>
                  </TouchableOpacity>
                </XStack>
              </View>
            </BlurView>
          </Modal>
        </YStack>
      </Card>
    </SafeAreaView>
  );
};

export default Page;
