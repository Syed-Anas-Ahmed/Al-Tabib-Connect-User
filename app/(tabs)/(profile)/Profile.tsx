import { Image, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card } from "tamagui";
import { TouchableOpacity } from "react-native";
import { buttons, colors } from "../../styles";
import { Text } from "tamagui";
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import MenuBar from "../../components/MenuBar";

const logOut = () => {
  SecureStore.deleteItemAsync("token");
  router.replace("/LoginScreen");
};

const Page = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:colors.primary,
        paddingHorizontal: 10,
        justifyContent: "center",
      }}
    >
      <MenuBar title="Profile" />
      <Card
        paddingTop={50}
        gap={20}
        flex={1}
        alignItems="center"
        unstyled
        backgroundColor={colors.primary}
      >
        <Image
          source={require("../../../assets/doctor.png")}
          style={{ borderRadius: 75, width: 150, height: 150 }}
        />
        <Text color={"white"} fontFamily="ArialB" fontSize={32}>
          Tehmoor Ali
        </Text>
        <Text color={"white"} fontFamily={"Arial"} fontSize={20}>
          03323403109
        </Text>
        <TouchableOpacity onPress={()=>router.push("/(tabs)/(family)/AddFamily")} style={[buttons.terBtn]}>
          <Text fontSize={20} color={"white"}>
            Add Family Member
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[buttons.secBtn]}>
          <Text fontSize={20} color={"white"}>
            Change Password
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[buttons.redBtn]} onPress={logOut}>
          <Text fontSize={20} color={"white"}>
            Logout
          </Text>
        </TouchableOpacity>
      </Card>
    </SafeAreaView>
  );
};

export default Page;
