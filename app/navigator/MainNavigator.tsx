import React from "react";
import FollowUp from "../FollowUp";
import Profile from "../Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import MenuScreen from "../MenuScreen";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../styles";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <LinearGradient
      locations={[0.3, 0.5, 0.8]}
      colors={[colors.gradPrim, "white", colors.gradSec]}
      style={{ flex: 1 }}
    >
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "white",
          tabBarStyle: {
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
            tabBarIcon: ({color}) => (
              <AntDesign name="home" size={30}  color={color} />
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
