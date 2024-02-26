import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import {
  fonts,
  FontColors,
} from "~/app/constants";
import { Text } from "react-native";
import GetAppComponent from "~/app/components/GetAppComponent";

const Page = () => {
  return (
    <SafeAreaView style={{ flex: 1, padding: 15, alignItems: "center" }}>
      <Text style={[fonts.heading, FontColors.blackFont]}>Confirm Appointment</Text>
      <GetAppComponent />
    </SafeAreaView>
  );
};

export default Page;
