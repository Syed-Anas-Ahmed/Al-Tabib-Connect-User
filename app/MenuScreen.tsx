import React from "react";
import DocDetails from "./components/home/DocDetails";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuBar from "./components/MenuBar";
import { useSelector } from "react-redux";

const MenuScreen = () => {

  const tokenRedux = useSelector((state: any) => state.tokens);
  const userRedux = useSelector((state: any) => state.users);

  //WHOLE DOC LIST
  //const docs = tokenRedux[tokenRedux.length - 1].doc;

  //const docName = tokenRedux[tokenRedux.length - 1].doc.name;
  //const clinicName =
    //docs.doctorClinicDALS[docs.doctorClinicDALS.length - 1].clinic.name;

  //console.log("Doctor Name: ", docName);
  //console.log("Token Redux: ", tokenRedux[0]);
  //console.log("User: ",JSON.stringify(userRedux,null,2))

  return (
    <SafeAreaView
      style={{ backgroundColor: "white", flex: 1, paddingHorizontal: 10 }}
    >
      <MenuBar />
      <DocDetails heading="Well Known Doctors" />
    </SafeAreaView>
  );
};

export default MenuScreen;
