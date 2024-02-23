import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuBar from "./components/MenuBar";
import { Button, ButtonText, Card, XStack, YStack } from "tamagui";
import { FlatList } from "react-native-gesture-handler";
import FamilyDetails from "./FamilyDetails";
import { colors } from "./styles";
import { FontColors, fonts } from "./constants";

const Family = () => {
  return (
    <SafeAreaView
      style={{ backgroundColor: "white", flex: 1, paddingHorizontal: 10 }}
    >
      <MenuBar title=" Your Family Details" />
      <Card
        padding={10}
        gap={20}
        flex={1}
        alignItems="center"
        unstyled
        backgroundColor={"$blue11"}
      >
        {FamilyDetails.map((item) => {
          return (
            <YStack
              borderColor={"white"}
              borderRadius={10}
              borderWidth={2}
              width={"100%"}
              key={item.id}
              padding={10}
              gap={10}
              alignItems="flex-start"
              justifyContent="center"
            >
              <XStack>
                <Image
                  source={require("../assets/doctor.png")}
                  style={{ borderRadius: 50, width: 100, height: 100 }}
                />
                <YStack justifyContent="center" paddingLeft gap={10}>
                  <XStack marginLeft={5}>
                    <Text style={[fonts.normalBold, FontColors.whiteFont]}>Name: </Text>
                    <Text style={[fonts.normal, FontColors.whiteFont]} >
                      {item.name}
                    </Text>
                  </XStack>

                  <XStack marginLeft={5}>
                    <Text style={[fonts.normalBold, FontColors.whiteFont]}>Age: </Text>
                    <Text style={[fonts.normal, FontColors.whiteFont]}>
                      {item.age}
                    </Text>
                  </XStack>

                  <XStack marginLeft={5}>
                    <Text style={[fonts.normalBold, FontColors.whiteFont]}>Phone: </Text>
                    <Text style={[fonts.normal, FontColors.whiteFont]}>
                      {item.phone}
                    </Text>
                  </XStack>
                </YStack>
              </XStack>

              <XStack gap={5}>
                <Button backgroundColor={colors.green} flex={1}>
                  <ButtonText>Check History</ButtonText>
                </Button>
                <Button backgroundColor={colors.red} flex={1}>
                  <ButtonText>Delete Member</ButtonText>
                </Button>
              </XStack>
            </YStack>
          );
        })}
      </Card>
    </SafeAreaView>
  );
};

export default Family;
