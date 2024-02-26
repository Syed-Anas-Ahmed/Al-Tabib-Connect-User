import React from "react";
import { Drawer } from "expo-router/drawer";
import { FontAwesome6, MaterialIcons, Entypo } from "@expo/vector-icons";
import { CustomDrawer } from "~/app/components/common/CustomDrawer";

const Layout = () => {
  return (
    <Drawer drawerContent={CustomDrawer} screenOptions={{headerShown:false}}>
      <Drawer.Screen
        name="Family"
        options={{
          title: "Family",
          drawerIcon: ({ color }) => (
            <MaterialIcons name="family-restroom" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="FindDoctor"
        options={{
          title: "Find Doctor",
          drawerIcon: ({ color }) => (
            <FontAwesome6 name="user-doctor" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Lab"
        options={{
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
