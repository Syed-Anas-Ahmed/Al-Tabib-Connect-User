import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Card, Separator, XStack, YStack } from "tamagui";
import primColor, { FontColors, fonts } from "~/app/constants";
import { Pagination } from "react-native-snap-carousel";
//import Data from "../../Data";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { useDispatch } from "react-redux";
import { addAppointment } from "../../context/actions/appointmentActions";
import axios from "axios";
import { colors } from "~/app/styles";
import * as Progress from "react-native-progress";

const cardWidth = (Dimensions.get("window").width / 2.2) * 2 + 10;
const screenwidth = Dimensions.get("screen").width;

interface DocDetailsProps {
  heading: string;
}

const DocDetails: React.FC<DocDetailsProps> = ({ heading }) => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [doctorsData, setDoctorsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Axios GET request to fetch doctors data
    axios
      .get(
        "http://192.168.10.9:8083/altabibconnect/getAllBasicData?token=1658475019378f0b7fca1-8dc1-4dab-ab9e-fee497f6e918",
      )
      .then((res) => {
        setDoctorsData(res.data.data.doctors);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const dispatch = useDispatch();

  const handleGetAppointment = (doc: any, clinic: any) => {
    dispatch(addAppointment(doc, clinic));
    router.navigate("BookAppointment");
  };

  const Doctors = [];

  var dataFin = {};

  // axios
  // .get(
  //   "http://192.168.10.9:8083/altabibconnect/getAllBasicData?token=1658475019378f0b7fca1-8dc1-4dab-ab9e-fee497f6e918",
  //   )
  //   .then((res) => {
  //     console.log("Response Data:",JSON.stringify(res.data.data,null,2));
  //     setDoctorsData(res.data.data.doctors);

  //     //const doctors = JSON.parse(res.data.data.doctors)

  //     //const responseData = res.data.data;

  //     //Doctors.push(responseData.doctors);

  //     // Iterate over each doctor
  //     // responseData.doctors.forEach((item: any) => {
  //       //   // Log Doctor Name
  //       //   console.log("Doctor Name:", item.name);s

  //       //   // Log Clinic Names, Charges, Start Time, End Time
  //       //   item.doctorClinicDALS.forEach((clinic: any) => {
  //         //     console.log("Clinic Name:", clinic.clinic.name);
  //         //     console.log("Charges:", clinic.charges);
  //         //     console.log("Start Time:", clinic.startTime);
  //         //     console.log("End Time:", clinic.endTime);
  //         //     console.log("=====================================");
  //         //   });

  //         //   // Separate doctors for better readability
  //         //   console.log("-------------------------------------");
  //         // });

  //         Doctors.forEach((item: any) => {
  //           dataFin = item
  //           item.forEach((doclists: any) => {
  //             console.log("Names: ", doclists.name);
  //             //console.log("Clinics: ", JSON.stringify(doclists.doctorClinicDALS,null,2));
  //             doclists.doctorClinicDALS.forEach((clinicList: any) => {
  //               console.log("Clinic Name: ", clinicList.clinic.name);
  //             });
  //             console.log("-------------------------------------");
  //           });
  //         }

  //         );
  //       });

  return (
    <Card
      borderWidth={1}
      borderColor={colors.primary}
      flex={1}
      padding={10}
      justifyContent="center"
      alignItems="center"
      backgroundColor={colors.primary}
      animation="bouncy"
      width={cardWidth}
      height={cardWidth}
    >
      {loading ? (
        <View
          style={{
            alignSelf: "center",
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
            height: cardWidth * 1.3,
            width: cardWidth,
          }}
        >
          <Text style={[fonts.headingSmall, FontColors.whiteFont]}>
            Loading Doctors
          </Text>
          <Progress.CircleSnail
            thickness={7}
            size={100}
            color={["#b3b7ff", "#FFFF", "#ffdda3"]}
          />
        </View>
      ) : (
        <View style={{ alignItems: "center" }}>
          <Text style={[FontColors.whiteFont, fonts.heading]}>{heading}</Text>
          <FlatList
            style={{ marginBottom: 10 }}
            decelerationRate="normal"
            data={doctorsData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={{ paddingVertical: 10, gap: 10 }}>
                {/* Doctor's information */}
                <View
                  style={{
                    gap: 10,
                    paddingLeft: 20,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../../../assets/doctor.png")}
                    style={{ borderRadius: 50, width: 100, height: 100 }}
                  />
                  <View style={{ marginLeft: 10 }}>
                    <Text style={[FontColors.whiteFont, fonts.normalBold]}>
                      {item.name}
                    </Text>
                    <Text style={{ color: "#f0f0f0" }}>{item.address}</Text>
                  </View>
                </View>
                {/* Separator */}
                <Separator marginVertical={15} borderColor={"white"} />

                {/* Clinics FlatList */}
                <FlatList
                  snapToAlignment="center"
                  snapToInterval={cardWidth - 22}
                  decelerationRate={"fast"}
                  //style={{ width: cardWidth - 22 }}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={item.doctorClinicDALS}
                  keyExtractor={(clinic) => clinic.id.toString()}
                  renderItem={({ item: clinic }) => (
                    <View style={{ width: cardWidth - 22 }}>
                      <Text style={[fonts.normalBold, FontColors.whiteFont]}>
                        Clinic Name:{" "}
                      </Text>
                      <Text style={[fonts.normal, { color: "#f0f0f0" }]}>
                        {clinic.clinic.name}
                      </Text>
                      <Text style={[fonts.normalBold, FontColors.whiteFont]}>
                        Charges:
                      </Text>
                      <Text style={[fonts.normal, { color: "#f0f0f0" }]}>
                        ${clinic.charges}
                      </Text>
                      <Text style={[fonts.normalBold, FontColors.whiteFont]}>
                        Timings:
                      </Text>
                      <Text style={[fonts.normal, { color: "#f0f0f0" }]}>
                        {clinic.startTime} - {clinic.endTime}
                      </Text>
                      {/* Additional clinic information can be displayed here */}
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          marginTop: 10,
                          gap: 10,
                        }}
                      >
                        {/* Buttons for actions */}
                        <TouchableOpacity
                          onPress={() =>
                            handleGetAppointment(item, item.doctorClinicDALS)
                          }
                          style={{
                            flex: 1,
                            backgroundColor: "#ffa600",
                            borderRadius: 5,
                            height: 40,
                            alignItems: "center",
                            justifyContent: "center",
                            paddingHorizontal: 10,
                          }}
                        >
                          <Text style={{ color: "#ffffff" }}>
                            Get Appointment
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={{
                            flex: 1,
                            backgroundColor: "#00be9f",
                            borderRadius: 5,
                            height: 40,
                            alignItems: "center",
                            justifyContent: "center",
                            paddingHorizontal: 10,
                          }}
                        >
                          <Text style={{ color: "white" }}>Get Directions</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}
                  onScroll={({ nativeEvent }) => {
                    const xOffset = nativeEvent.contentOffset.x;
                    const index = Math.round(xOffset / cardWidth);
                    setActiveSlide(index);
                  }}
                />
                {/* Pagination dots */}
                <Pagination
                  dotsLength={item.doctorClinicDALS.length}
                  activeDotIndex={activeSlide}
                  containerStyle={styles.paginationContainer}
                  dotStyle={styles.paginationDot}
                  inactiveDotStyle={styles.paginationInactiveDot}
                  inactiveDotOpacity={0.8}
                  inactiveDotScale={0.7}
                />
              </View>
            )}
          />
          <XStack alignSelf="center" alignItems="center" gap={15}>
            <Text style={[fonts.normal, { color: "#ffffff" }]}>
              Swipe to see more
            </Text>
            <AntDesign name="rightcircle" size={20} color={colors.white} />
          </XStack>
        </View>
      )}
    </Card>
  );
};

export default DocDetails;

const styles = StyleSheet.create({
  paginationContainer: {
    paddingVertical: 8,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  paginationInactiveDot: {
    backgroundColor: "#ffffff",
  },
});
