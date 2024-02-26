import React from "react";
import { Drawer } from "expo-router/drawer";
import { AntDesign, FontAwesome6, Entypo } from "@expo/vector-icons";
import { CustomDrawer } from "~/app/components/common/CustomDrawer";

const Layout = () => {
  return (
    <Drawer drawerContent={CustomDrawer} screenOptions={{headerShown:false,drawerLabelStyle:{marginLeft:-20}}}>
      <Drawer.Screen
        name="Home"
        options={{
          title: "Home",
          drawerActiveTintColor: "white",
          drawerActiveBackgroundColor: "#4E54DA",
          drawerIcon: ({ color }) => (
            <AntDesign name="home" size={30} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="FindDoctor"
        options={{
          drawerActiveTintColor: "white",
          drawerActiveBackgroundColor: "#4E54DA",
          title: "Find Doctor",
          drawerIcon: ({ color }) => (
            <FontAwesome6 name="user-doctor" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Lab"
        options={{
          drawerActiveTintColor: "white",
          drawerActiveBackgroundColor: "#4E54DA",
          title: "Laboratory",
          drawerIcon: ({ color }) => (
            <Entypo name="lab-flask" size={24} color={color} />
          ),
        }}
      />
    </Drawer>
  );
};

export default Layout;
