import React from "react";
import FollowUp from "../FollowUp";
import Profile from "../Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import MenuScreen from "../MenuScreen";
import { LinearGradient } from "expo-linear-gradient";
import { gradient, paddings } from "../constants";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <LinearGradient
      colors={["#0ab99c", "#238f57", "#51bcc4"]}
      style={{ flex: 1 }}
    >
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#0ab99c",
          tabBarStyle: {
            borderWidth: 1,
            borderTopWidth: 1,
            borderColor: "#f5f5f5",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: "#f5f5f5",
            height: 70,
            //justifyContent: "center",
            paddingTop: 10,
            paddingBottom: 10,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={MenuScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" size={30} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Follow Up"
          component={FollowUp}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="people-arrows" size={30} color={color} />
            ),
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" size={30} color={color} />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </LinearGradient>
  );
};

export default MainNavigator;
