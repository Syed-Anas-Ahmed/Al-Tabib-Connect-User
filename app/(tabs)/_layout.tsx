import React from "react";
import { Tabs } from "expo-router";
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { colors } from "../styles";

const Layout = () => {
  return (
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#4E54DA",
          tabBarInactiveTintColor: "#4E54DA",
          tabBarStyle: {
            
            borderWidth: 1,
            borderTopWidth: 1,
            //borderTopLeftRadius: 30,
            //borderTopRightRadius: 30,
            backgroundColor: "white",
            borderColor: "white",
            borderTopColor: "white",
            height: "9%",
            paddingTop: 10,
            paddingBottom: 7,
          },
        }}
      >
        <Tabs.Screen
          name="(home)"
          options={{
            headerShown: false,
            tabBarLabel: "Home",
            tabBarIcon: () => (
              <AntDesign name="home" size={30} color={colors.primary} />
            ),
          }}
        />
        <Tabs.Screen
          name="(followup)"
          options={{
            headerShown: false,
            tabBarLabel: "Follow Up",
            tabBarIcon: () => (
              <FontAwesome5 name="people-arrows" size={30} color={colors.primary} />
            ),
          }}
        />
        <Tabs.Screen
          name="(family)"
          options={{
            headerShown: false,
            tabBarLabel: "Family",
            tabBarIcon: () => (
              <MaterialIcons name="family-restroom" size={35} color={colors.primary} />
            ),
          }}
        />
        <Tabs.Screen
          name="(profile)"
          options={{
            headerShown: false,
            tabBarLabel: "Profile",
            tabBarIcon: () => (
              <FontAwesome name="user" size={30} color={colors.primary} />
            ),
          }}
        />
      </Tabs>
  );
};

export default Layout;
