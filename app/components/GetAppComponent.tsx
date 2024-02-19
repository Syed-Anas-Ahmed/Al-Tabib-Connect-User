import { Text, ToastAndroid, TouchableOpacity } from "react-native";
import React from "react";
import { Card, XStack } from "tamagui";
import dayjs from "dayjs";
import "dayjs/locale/en";
import { Dimensions } from "react-native";
import { FontColors, fonts, themeColors } from "../constants";
import { router } from "expo-router";
import { useSelector } from "react-redux";

dayjs.locale("en");

const cardWidth = Dimensions.get("window").width - 30;

const GetAppComponent = () => {

  const data = useSelector((state: any) => state.appointments);

  console.log(JSON.stringify(data,null,2))

  // Last Appointment Details
  const docs = data[data.length-1].doc;
  const clinics = data[data.length-1].clinic;


  const dispactBooked = () => {
    ToastAndroid.show("Appointment Booked", ToastAndroid.LONG);
    setTimeout(() => {
      router.replace("../navigator/MainNavigator");
    }, 2000);
  };
  const cancelBooking = () => {
    setTimeout(() => {
      router.replace("../navigator/MainNavigator");
    }, 0);
  };

  return (
    <Card
      width={cardWidth}
      padding={10}
      gap={5}
      marginBottom={10}
      backgroundColor={"white"}
    >
      <XStack gap={5}>
        <Text style={[FontColors.primaryFont, fonts.normalBold]}>Date:</Text>
        <Text style={[FontColors.blackFont, fonts.normal]}>
          {dayjs().format("D-MMM-YYYY")}
        </Text>
      </XStack>
      <XStack gap={5}>
        <Text style={[FontColors.primaryFont, fonts.normalBold]}>
          Doctor Name:
        </Text>
        <Text style={[FontColors.blackFont, fonts.normal]}>{docs.drName}</Text>
      </XStack>
      <XStack gap={5}>
        <Text style={[FontColors.primaryFont, fonts.normalBold]}>
          Qualification:
        </Text>
        <Text style={[FontColors.blackFont, fonts.normal]}>{docs.drQual}</Text>
      </XStack>
      <XStack gap={5}>
        <Text style={[FontColors.primaryFont, fonts.normalBold]}>
          Clinic Name:
        </Text>
        <Text style={[FontColors.blackFont, fonts.normal]}>{clinics.clinicName}</Text>
        
      </XStack>
      <XStack gap={5}>
        <Text style={[FontColors.primaryFont, fonts.normalBold]}>
          Patient Name:
        </Text>
        <Text style={[FontColors.blackFont, fonts.normal]}>{}</Text>
      </XStack>
      <XStack gap={5} justifyContent="space-between">
        <TouchableOpacity
          onPress={() => cancelBooking()}
          style={[
            themeColors.primary,
            {
              borderRadius: 7,
              padding: 10,
              flex: 1,
              alignItems: "center",
            },
          ]}
        >
          <Text style={[FontColors.whiteFont, fonts.normal]}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispactBooked()}
          style={[
            themeColors.primary,
            {
              borderRadius: 7,
              padding: 10,
              flex: 1,
              alignItems: "center",
            },
          ]}
        >
          <Text style={[FontColors.whiteFont, fonts.normal]}>
            Get Appointment
          </Text>
        </TouchableOpacity>
      </XStack>
    </Card>
  );
};
export default GetAppComponent;
