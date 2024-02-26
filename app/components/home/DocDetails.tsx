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
import { Card, XStack } from "tamagui";
import { FontColors, fonts } from "~/app/constants";
import { Pagination } from "react-native-snap-carousel";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { useDispatch } from "react-redux";
import { addAppointment } from "../../context/actions/appointmentActions";
import axios from "axios";
import { colors } from "~/app/styles";
import * as Progress from "react-native-progress";
import { url } from "~/env";

const cardWidth = (Dimensions.get("window").width / 2.2) * 2 + 10;


interface DocDetailsProps {
  heading: string;
}

const DocDetails: React.FC<DocDetailsProps> = ({ heading }) => {
  
  const dispatch = useDispatch();

  const [activeSlide, setActiveSlide] = React.useState(0);
  const [doctorsData, setDoctorsData] = useState([]);
  const [loading, setLoading] = useState(true);

  //USE YOUR OWN URL!!
  const uri = url;

  useEffect(() => {
    // Axios GET request to fetch doctors data
    axios
      .get(
        `${uri}getAllBasicData?token=1658475019378f0b7fca1-8dc1-4dab-ab9e-fee497f6e918`,
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

  const handleGetAppointment = (doc: any, clinic: any) => {
    dispatch(addAppointment(doc, clinic));
    router.push("/(tabs)/(home)/SetAppointment");
  };

  return (
    <Card
    unstyled
      borderWidth={1}
      borderColor={colors.primary}
      flex={1}
      padding={10}
      justifyContent="center"
      alignItems="center"
      backgroundColor={"white"}
      animation="bouncy"
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
          <Text style={[fonts.heading, FontColors.primaryFont]}>
            Loading Doctors
          </Text>
          <Progress.CircleSnail
            thickness={7}
            size={100}
            color={["red", colors.primary, colors.yellow]}
          />
        </View>
      ) : (
        <View style={{ alignItems: "center" }}>
          <Text style={[FontColors.blue, fonts.heading]}>{heading}</Text>
          <FlatList
            horizontal={false}
            style={{ marginBottom: 10 }}
            decelerationRate="normal"
            data={doctorsData}
            keyExtractor={(item: any) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={{ paddingVertical: 10, gap: 15 }}>
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
                    <Text style={[FontColors.blue, fonts.sub]}>
                      {item.name}
                    </Text>
                    <Text style={[FontColors.blackFont, fonts.normal]}>
                      {item.address}
                    </Text>
                  </View>
                </View>

                {/* Clinics FlatList */}
                <FlatList
                  snapToAlignment="center"
                  snapToInterval={cardWidth - 22}
                  decelerationRate={"fast"}
                  style={{ width: cardWidth - 22 }}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={item.doctorClinicDALS}
                  keyExtractor={(clinic) => clinic.id.toString()}
                  renderItem={({ item: clinic }) => (
                    <View
                      style={{
                        borderColor: "#ebebeb",
                        borderWidth: 2,
                        borderRadius: 10,
                        padding: 10,
                        width: cardWidth - 22,
                        gap: 5,
                      }}
                    >
                      <Text style={[fonts.sub, FontColors.blue]}>
                        Clinic Name:
                      </Text>
                      <Text style={[fonts.normal, { color: "black" }]}>
                        {clinic.clinic.name}
                      </Text>
                      <Text style={[fonts.sub, FontColors.blue]}>
                        Charges:
                      </Text>
                      <Text style={[fonts.normal, { color: "black" }]}>
                        ${clinic.charges}
                      </Text>
                      <Text style={[fonts.sub, FontColors.blue]}>
                        Timings:
                      </Text>
                      <Text style={[fonts.normal, { color: "black" }]}>
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
              Swipe for more
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
    width: cardWidth - 22,
    paddingVertical: 8,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: colors.primary,
  },
  paginationInactiveDot: {
    backgroundColor: colors.labelGray,
  },
});
