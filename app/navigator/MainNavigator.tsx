import React from "react";
import FollowUp from "../FollowUp";
import Profile from "../Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  FontAwesome,
  AntDesign,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import MenuScreen from "../MenuScreen";
import Family from "../Family";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "white",
          tabBarStyle: {
            marginTop: 10,
            borderWidth: 1,
            borderTopWidth: 1,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: "#ffa600",
            borderColor: "#ffa600",
            borderTopColor: "#ffa600",
            height: 70,
            paddingTop: 10,
            paddingBottom: 7,
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
          name="Family"
          component={Family}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="family-restroom" size={35} color={color} />
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
    </>
  );
};

export default MainNavigator;
