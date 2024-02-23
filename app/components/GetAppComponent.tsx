import { Text, ToastAndroid, TouchableOpacity } from "react-native";
import React from "react";
import { Card, TextArea, XStack } from "tamagui";
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

  //WHOLE DOC LIST
  const docs = data[data.length - 1].doc;

  const docName = data[data.length - 1].doc.name;
  const clinicName = docs.doctorClinicDALS[docs.doctorClinicDALS.length - 1].clinic.name;

  //console.log("Redux Data: ", JSON.stringify(data, null, 2));

  // Last Appointment Details
  //console.log("Last Appointment DOCS: ", JSON.stringify(docs, null, 2));

  // docs.doctorClinicDALS.map(
  //   (item) => console.log("Clinic Name: ", item.clinic.name),
  //   null,
  //   2,
  // );
  //console.log("Clinic: ", docs.doctorClinicDALS[docs.doctorClinicDALS.length - 1].clinic.name)


  console.log("Doctor Name: ", docName);
  console.log("Clinic Name: ", clinicName);

  //console.log("Quals:", quals)

  // const clinics = data[data.length-1].clinic;s
  // console.log("Last Appointment Clinics: ",JSON.stringify(docs,null,2))

  const dispactBooked = () => {
    ToastAndroid.show("Appointment Booked", ToastAndroid.LONG);
    setTimeout(() => {
      router.replace("../navigator/MainNavigator");
    }, 0);
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
      overflow="scroll"
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
        <Text style={[FontColors.blackFont, fonts.normal]}>{docName}</Text>
      </XStack>
      <XStack gap={5}>
        <Text style={[FontColors.primaryFont, fonts.normalBold]}>
          Qualification:
        </Text>
        {docs.qualifications.map((item:any) => (
          <Text style={[FontColors.blackFont, fonts.normal]}>{item.name}</Text>
        ))}
      </XStack>
      <XStack gap={5}>
        <Text style={[FontColors.primaryFont, fonts.normalBold]}>
          Clinic Name:
        </Text>
        <Text style={[FontColors.blackFont, fonts.normal]}>{clinicName}</Text>
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
            themeColors.yellow,
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
            themeColors.blue,
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
