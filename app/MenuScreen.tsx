import React from "react";
import DocDetails from "./components/home/DocDetails";
import { SafeAreaView } from "react-native-safe-area-context"
import MenuBar from "./components/MenuBar";

const MenuScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor:"white",flex:1, paddingHorizontal:10}}>
      <MenuBar/>
      <DocDetails heading="Well Known Doctors" />
    </SafeAreaView>
  );
};

export default MenuScreen;
