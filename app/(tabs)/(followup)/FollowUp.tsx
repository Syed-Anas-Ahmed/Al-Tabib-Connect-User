import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Drawer } from "expo-router/drawer";
import MenuBar from "~/app/components/MenuBar";
import { colors } from "~/app/styles";

const Page = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:colors.primary, paddingHorizontal: 10, paddingBottom: 10 }}>
      <MenuBar title="Follow Up" />
      <Text>FollowUp</Text>
    </SafeAreaView>
  );
};

export default Page;
