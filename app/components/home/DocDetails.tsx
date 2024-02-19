import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Card, Image, Separator, XStack, YStack } from "tamagui";
import primColor, { FontColors, fonts } from "~/app/constants";
import { Pagination } from "react-native-snap-carousel";
import Data from "../../Data";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { useDispatch } from "react-redux";

import { addAppointment } from "../../context/actions/appointmentActions";

import {Clinic} from "../../context/types"

const cardWidth = (Dimensions.get("window").width / 2.2) * 2 + 10;

interface DocDetailsProps {
  heading: string;
}

const DocDetails: React.FC<DocDetailsProps> = ({ heading }) => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const dispatch = useDispatch();


  const handleGetAppointment = (doctorId: number, clinicId: number, clinic: Clinic) => {
    dispatch(addAppointment(doctorId, clinicId, clinic));
    console.log("clinic: ", clinic)
    console.log("doctor: ", doctorId)
    console.log("clinic ID: ", clinicId)
    router.navigate("BookAppointment");
  };
  
  return (
    <Card
      borderWidth={1}
      borderColor={"lightgrey"}
      flex={1}
      padding={10}
      justifyContent="center"
      alignItems="center"
      backgroundColor={"white"}
      animation="quick"
      width={cardWidth}
      height={cardWidth}
    >
      <Text style={[FontColors.primaryDark, fonts.headingSmall]}>
        {heading}
      </Text>
      <FlatList
        snapToInterval={cardWidth * 1.2}
        decelerationRate="fast"
        onScroll={() => {
          setActiveSlide(0);
        }}
        data={Data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <YStack>
            <XStack>
              <Image source={item.drImage} width={100} height={100} />
              <YStack justifyContent="center">
                <Text style={[FontColors.primaryDark, fonts.normalBold]}>
                  {item.drName}
                </Text>
                <Text style={[{ color: "gray" }, fonts.normal]}>
                  {item.drQual}
                </Text>
              </YStack>
            </XStack>
            <Separator marginBottom={10} borderColor={"lightgrey"} />
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={item.clinics}
              keyExtractor={(clinic) => clinic.clinicName}
              renderItem={({ item: clinic }) => (
                <YStack width={cardWidth - 22}>
                  <Text style={[fonts.normalBold, FontColors.primaryDark]}>
                    Clinic Name:
                  </Text>
                  <Text style={[fonts.normal, { color: "gray" }]}>
                    {clinic.clinicName}
                  </Text>
                  <Text style={[fonts.normalBold, FontColors.primaryDark]}>
                    Address:
                  </Text>
                  <Text style={[fonts.normal, { color: "gray" }]}>
                    {clinic.clinicAddress}
                  </Text>
                  <Text style={[fonts.normalBold, FontColors.primaryDark]}>
                    Fees:
                  </Text>
                  <Text style={[fonts.normal, { color: "gray" }]}>
                    {clinic.clinicFees}
                  </Text>
                  <Text style={[fonts.normalBold, FontColors.primaryDark]}>
                    Timings:
                  </Text>
                  <Text style={[fonts.normal, { color: "gray" }]}>
                    {clinic.clinicTimings}
                  </Text>
                  <XStack justifyContent="space-between" gap={10}>
                    <TouchableOpacity
                    onPress={() => handleGetAppointment(item.id, clinic.id, clinic)}
                      style={{
                        flex: 1,
                        backgroundColor: "#0ab99c",
                        borderRadius: 5,
                        height: 40,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ color: "white" }}>Get Appointment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        flex: 1,
                        backgroundColor: "#0ab99c",
                        borderRadius: 5,
                        height: 40,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ color: "white" }}>Get Directions</Text>
                    </TouchableOpacity>
                  </XStack>
                </YStack>
              )}
              onScroll={({ nativeEvent }) => {
                const xOffset = nativeEvent.contentOffset.x;
                const index = Math.round(xOffset / cardWidth);
                setActiveSlide(index);
              }}
              snapToInterval={cardWidth - 22}
              snapToAlignment="center"
              decelerationRate="fast"
            />
            <YStack padding={10} alignItems="center">
              <Pagination
                dotsLength={item.clinics.length}
                activeDotIndex={activeSlide}
                containerStyle={styles.paginationContainer}
                dotStyle={styles.paginationDot}
                inactiveDotStyle={styles.paginationInactiveDot}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
              />
              <XStack alignItems="center" gap={15}>
                <AntDesign name="leftcircle" size={20} color="#0ab99c" />
                <Text style={[fonts.normalBold, { color: "#c0c0c0" }]}>
                  Swipe to see more
                </Text>
                <AntDesign name="rightcircle" size={20} color="#0ab99c" />
              </XStack>
            </YStack>
          </YStack>
        )}
      />
    </Card>
  );
};

export default DocDetails;

const styles = StyleSheet.create({
  paginationContainer: {
    paddingVertical: 8,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
    backgroundColor: primColor,
  },
  paginationInactiveDot: {
    backgroundColor: "lightgrey",
  },
});
