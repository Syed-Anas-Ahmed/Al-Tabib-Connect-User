import { Platform, Text, ToastAndroid, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Card, TextArea, XStack } from "tamagui";
import dayjs from "dayjs";
import "dayjs/locale/en";
import { Dimensions } from "react-native";
import { FontColors, fonts, themeColors } from "../constants";
import { router } from "expo-router";
import { useSelector } from "react-redux";
import axios from "axios";
import { url } from "~/env";
import * as SecureStore from "expo-secure-store";

dayjs.locale("en");

const cardWidth = Dimensions.get("window").width - 30;

const GetAppComponent = () => {
  const data = useSelector((state: any) => state.appointments);
  const [token, setToken] = useState("");
  const patientRedux = useSelector((state: any) => state.patients);

  const getToken = async () => {
    try {
      const token = await SecureStore.getItemAsync("token");
      if (token) {
        console.log("Token:", token);
        // You can dispatch an action here or perform other operations with the token
        setToken(token);
      } else {
        console.log("Token not found");
      }
    } catch (error) {
      console.error("Error retrieving token:", error);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  //WHOLE DOC LIST
  const docs = data[data.length - 1].doc;

  const docId = data[data.length - 1].doc.id;
  const docName = data[data.length - 1].doc.name;
  const clinicName =
    docs.doctorClinicDALS[docs.doctorClinicDALS.length - 1].clinic.name;
  const clinicId =
    docs.doctorClinicDALS[docs.doctorClinicDALS.length - 1].clinic.id;
  const patient = patientRedux[0];
  const patientId = patientRedux[0].id;

  console.log("User Token: ", token);
  console.log("-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=");
  console.log("Doctor ID: ", docId);
  console.log("Doctor Name: ", docName);
  console.log("-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=");
  console.log("Clinic Id: ", clinicId);
  console.log("Clinic Name: ", clinicName);
  console.log("-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=");
  console.log("Patient ID: ", patient.id);
  console.log("Patient Name: ", patient.name);
  console.log("-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=");

  const uri = url;

  const dispactBooked = () => {
    axios.get(
      `${uri}setAppointment?token=${token}&doctorId=${docId}&clinicId=${clinicId}&patientId=${patientId}&visitDate=2024-02-26`,
    )
    .then((res) => {
      console.log("Appointment Booked: ", res.data);
    })
    .catch((error) => {
      console.error("Error setting appointment: ", error);
    });
    {
      Platform.OS === "ios"
        ? alert("Appointment Booked")
        : ToastAndroid.show("Appointment Booked", ToastAndroid.LONG);
    }
    setTimeout(() => {
      router.push("/(tabs)/(home)/Home");
    }, 2000);
  };

  const cancelBooking = () => {
    setTimeout(() => {
      router.push("/(tabs)/(home)/Home");
    }, 2000);
  };

  return (
    <Card
      width={cardWidth}
      padding={10}
      gap={15}
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
        {docs.qualifications.map((item: any) => (
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
        <Text style={[FontColors.blackFont, fonts.normal]}>{patient.name}</Text>
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
