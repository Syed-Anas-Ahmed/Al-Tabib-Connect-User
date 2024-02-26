import { FlatList, SafeAreaView, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, ButtonText, Card, XStack, YStack } from "tamagui";
import { Dimensions } from "react-native";
import { FontColors, fonts } from "../constants";
import { router } from "expo-router";
import { colors } from "../styles";
import MenuBar from "./MenuBar";
import axios from "axios";
import { url } from "~/env";
import { useDispatch } from "react-redux";
import { addPatient } from "../context/actions/patientActions";

const cardWidth = Dimensions.get("window").width - 15;

const BookingComponents = () => {

  const dispatch = useDispatch();

  const [patients, setPatients] = useState([]);
  //const PATIENT:any[] = [];

  const parseDateString = (dateString: string) => {
    const months: { [key: string]: number } = {
      Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
      Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
    };
    const parts = dateString.split('-');
    const day = parseInt(parts[0]);
    const month = months[parts[1].substr(0, 3)]; // Get the month index from the months object
    const year = parseInt(parts[2]) < 50 ? 2000 + parseInt(parts[2]) : 1900 + parseInt(parts[2]); // Assume 20th or 21st century based on year
    return new Date(year, month, day);
  };


  const uri = url;
  useEffect(() => {
    axios
      .get(
        `${uri}getFamily?token=1658475019378f0b7fca1-8dc1-4dab-ab9e-fee497f6e918`,
      )
      .then((res) => {

        const patients = res.data.data.patients;

        const updatedPatients = patients.map((patient:any) => {
          const dobDate = parseDateString(patient.dob);
          const currentDate = new Date();
          const age = currentDate.getFullYear() - dobDate.getFullYear();
          if (
            currentDate.getMonth() < dobDate.getMonth() ||
            (currentDate.getMonth() === dobDate.getMonth() &&
            currentDate.getDate() < dobDate.getDate())
          ) {
            patient.age = age - 1;
          } else {
            patient.age = age;
          }
          return patient;
        });
        setPatients(updatedPatients);

        console.log("Updated Patients: ", JSON.stringify(updatedPatients, null, 2));

      });
    }, []);
    

  const dispactBooked = (id,name) => {
    const reduxPatients = dispatch(addPatient({id,name}));
    router.push("/(tabs)/(home)/GetAppointment");
  };
  return (
    // <YStack
    //   flex={1}
    //   justifyContent="center"
    //   alignItems="center"
    //   animation="quick"
    //   width={cardWidth}
    //   height={300}
    // >
    //   <FlatList
    //     style={{ width: "100%" }}
    //     data={Patients}
    //     renderItem={({ item }) => (
    //       <Card padding={10} gap={5} marginBottom={5} backgroundColor={"white"}>
    //         <XStack gap={5}>
    //           <Text style={[FontColors.primaryFont, fonts.normalBold]}>
    //             Name:
    //           </Text>
    //           <Text style={[FontColors.blackFont, fonts.normal]}>
    //             {item.name}
    //           </Text>
    //         </XStack>
    //         <XStack gap={5}>
    //           <Text style={[FontColors.primaryFont, fonts.normalBold]}>
    //             Age:
    //           </Text>
    //           <Text style={[FontColors.blackFont, fonts.normal]}>
    //             {item.age}
    //           </Text>
    //         </XStack>
    //         <XStack gap={5}>
    //           <Text style={[FontColors.primaryFont, fonts.normalBold]}>
    //             Phone
    //           </Text>
    //           <Text style={[FontColors.blackFont, fonts.normal]}>
    //             {item.Phone}
    //           </Text>
    //         </XStack>
    //         <XStack gap={5} justifyContent="space-between">
    //           <TouchableOpacity
    //             style={[
    //               themeColors.yellow,
    //               {
    //                 borderRadius: 7,
    //                 padding: 10,
    //                 flex: 1,
    //                 alignItems: "center",
    //               },
    //             ]}
    //           >
    //             <Text style={[FontColors.whiteFont, fonts.normal]}>
    //               Patient History
    //             </Text>
    //           </TouchableOpacity>
    //           <TouchableOpacity
    //             onPress={() => dispactBooked()}
    //             style={[
    //               themeColors.blue,
    //               {
    //                 borderRadius: 7,
    //                 padding: 10,
    //                 flex: 1,
    //                 alignItems: "center",
    //               },
    //             ]}
    //           >
    //             <Text style={[FontColors.whiteFont, fonts.normal]}>
    //               Select Patient
    //             </Text>
    //           </TouchableOpacity>
    //         </XStack>
    //       </Card>
    //     )}
    //   />
    // </YStack>
    <SafeAreaView
    style={{ backgroundColor: "white", flex: 1, paddingHorizontal: 10 }}
  >
    <MenuBar title=" Your Family Details" />
    <Card
      padding={10}
      gap={20}
      flex={1}
      alignItems="center"
      unstyled
      backgroundColor={"$blue11"}
    >
      <FlatList
      style={{ width: "100%" }}
      data={patients}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <YStack
        marginVertical={10}
        borderColor={"white"}
        borderRadius={10}
        borderWidth={2}
        width={"100%"}
        key={item.id}
        padding={10}
        gap={10}
        alignItems="flex-start"
        justifyContent="center"
       >{/*{PATIENT.push({id:item.id, name:item.name})}*/}
        <XStack>
          <Image
            source={require("~/assets/doctor.png")}
            style={{ borderRadius: 50, width: 100, height: 100 }}
          />
          <YStack justifyContent="center" paddingLeft gap={10}>
            <XStack marginLeft={5}>
              <Text style={[fonts.normalBold, FontColors.whiteFont]}>
                Name:{" "}
              </Text>
              <Text style={[fonts.normal, FontColors.whiteFont]}>
                {item.name}
              </Text>
            </XStack>

            <XStack marginLeft={5}>
              <Text style={[fonts.normalBold, FontColors.whiteFont]}>
                Age:{" "}
              </Text>
              <Text style={[fonts.normal, FontColors.whiteFont]}>
                {item.age}
              </Text>
            </XStack>

            <XStack marginLeft={5}>
              <Text style={[fonts.normalBold, FontColors.whiteFont]}>
                Phone:{" "}
              </Text>
              <Text style={[fonts.normal, FontColors.whiteFont]}>
                {item.cellNumber}
              </Text>
            </XStack>
          </YStack>
        </XStack>
        <XStack gap={5}>
        <Button backgroundColor={colors.yellow} flex={1}>
            <ButtonText>Choose Date</ButtonText>
          </Button>     
        </XStack>

        <XStack gap={5}>
          <Button backgroundColor={colors.green} flex={1}>
            <ButtonText>Check History</ButtonText>
          </Button>
          <Button onPress={()=>dispactBooked(item.id, item.name)} backgroundColor={colors.red} flex={1}>
            <ButtonText>Select Patient</ButtonText>
          </Button>
        </XStack>
      </YStack>
      )}
    />
    </Card>
  </SafeAreaView>
  );
};

export default BookingComponents;