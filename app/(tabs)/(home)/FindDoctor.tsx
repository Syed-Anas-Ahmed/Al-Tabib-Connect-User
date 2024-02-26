import { StyleSheet, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuBar from "~/app/components/MenuBar";

const FindDoctor = () => {
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 10, paddingBottom: 10 }}>
      <MenuBar title="Find Doctors" />
      <Text>Find Doctor</Text>
    </SafeAreaView>
  );
};

export default FindDoctor;

const styles = StyleSheet.create({});
