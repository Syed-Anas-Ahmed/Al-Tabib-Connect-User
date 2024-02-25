import React from "react";
import { Text, XStack } from "tamagui";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const MenuBar = ({ title }: { title: string }) => {
  return (
    <XStack alignItems="center" marginVertical={10}>
      <TouchableOpacity>
        <Ionicons name="menu" size={35} color="#ffa600" />
      </TouchableOpacity>
      <XStack gap={5} flex={1}>
        {title ? (
          <Text
            marginLeft={10}
            color={"$blue11"}
            fontSize={28}
            fontFamily={"ArialB"}
          >
            {title}
          </Text>
        ) : (
          <>
            <Text
              color={"$blue11"}
              fontSize={28}
              marginLeft={10}
              fontFamily={"ArialB"}
            >
              Al-Tabib
            </Text>
            <Text color={"$red11"} fontSize={28} fontFamily={"ArialB"}>
              Connect
            </Text>
          </>
        )}
      </XStack>
      <TouchableOpacity>
        <Ionicons name="notifications" size={35} color="#ffa600" />
      </TouchableOpacity>
    </XStack>
  );
};

export default MenuBar;
