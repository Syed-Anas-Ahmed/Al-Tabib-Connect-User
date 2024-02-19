import {
  FlatList,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Card, XStack, YStack } from "tamagui";

import Patients from "../Patients";

import { Dimensions } from "react-native";
import { FontColors, fonts, paddings, themeColors } from "../constants";
import CusButton from "./CusButton";
import { router } from "expo-router";

const cardWidth = Dimensions.get("window").width - 15;

const BookingComponents = () => {
  const dispactBooked = () => {
    router.navigate("../GetAppointment");
  };

  return (
    <YStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      animation="quick"
      width={cardWidth}
      height={300}
    >
      <FlatList
        style={{ width: "100%" }}
        data={Patients}
        renderItem={({ item }) => (
          <Card padding={10} gap={5} marginBottom={5} backgroundColor={"white"}>
            <XStack gap={5}>
              <Text style={[FontColors.primaryFont, fonts.normalBold]}>
                Name:
              </Text>
              <Text style={[FontColors.blackFont, fonts.normal]}>
                {item.name}
              </Text>
            </XStack>
            <XStack gap={5}>
              <Text style={[FontColors.primaryFont, fonts.normalBold]}>
                Age:
              </Text>
              <Text style={[FontColors.blackFont, fonts.normal]}>
                {item.age}
              </Text>
            </XStack>
            <XStack gap={5}>
              <Text style={[FontColors.primaryFont, fonts.normalBold]}>
                Phone
              </Text>
              <Text style={[FontColors.blackFont, fonts.normal]}>
                {item.Phone}
              </Text>
            </XStack>
            <XStack gap={5} justifyContent="space-between">
              <TouchableOpacity
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
                  Patient History
                </Text>
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
                  Select Patient
                </Text>
              </TouchableOpacity>
            </XStack>
          </Card>
        )}
      />
    </YStack>
  );
};

export default BookingComponents;

const styles = StyleSheet.create({});
