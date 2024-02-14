import React, { useState } from "react";
import {
  FlatList,
  Image,
  Text,
  View,
  Dimensions,
} from "react-native";
import { FontColors, fonts, MenuStyle } from "../../constants";
import Data from "../../Data";

const cardWidth = Dimensions.get("screen").width * 0.93;

const DetailCard: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0); // State to manage activeSlide

  const renderItem = ({ item }: { item: any }) => {
    return (
      <View style={MenuStyle.itemContainer}>
        <View style={MenuStyle.doctorInfoContainer}>
          <Image source={item.drImage} style={MenuStyle.doctorImage} />
          <View style={MenuStyle.doctorDetailsContainer}>
            <Text style={[fonts.subBold, FontColors.primaryFont]}>
              {item.drName}
            </Text>
            <Text style={[fonts.subBold, FontColors.primaryFont]}>
              {item.drQual}
            </Text>
          </View>
        </View>
        <FlatList
          data={item.clinics}
          horizontal
          pagingEnabled
          snapToAlignment="start"
          decelerationRate={"fast"}
          keyExtractor={(clinic) => clinic.clinicName}
          renderItem={({ item: clinic }) => (
            <View style={MenuStyle.clinicContainer}>
              <Text style={[fonts.subBold, FontColors.primaryDark]}>
                Clinic Name:
              </Text>
              <Text style={[fonts.normal, FontColors.primaryFont]}>
                {clinic.clinicName}
              </Text>
              <Text style={[fonts.subBold, FontColors.primaryDark]}>
                Address:
              </Text>
              <Text style={[fonts.normal, FontColors.primaryFont]}>
                {clinic.clinicAddress}
              </Text>
              <Text style={[fonts.subBold, FontColors.primaryDark]}>Fees:</Text>
              <Text style={[fonts.normal, FontColors.primaryFont]}>
                {clinic.clinicFees}
              </Text>
              <Text style={[fonts.subBold, FontColors.primaryDark]}>
                Timings:
              </Text>
              <Text style={[fonts.normal, FontColors.primaryFont]}>
                {clinic.clinicTimings}
              </Text>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
          removeClippedSubviews={true} 
          initialNumToRender={1} 
          onScroll={({ nativeEvent }) => {
            const xOffset = nativeEvent.contentOffset.x;
            const index = Math.round(xOffset / cardWidth);
            setActiveSlide(index); 
          }}
        />
        <View style={MenuStyle.paginationContainer}>
          {item.clinics.map((clinic: any, index: number) => (
            <View
              key={clinic.clinicName} 
              style={[
                MenuStyle.paginationDot,
                index === activeSlide ? MenuStyle.activeDot : null,
              ]}
            />
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={MenuStyle.cardContainer}>
      <Text style={[fonts.heading, FontColors.primaryDark]}>
        Well Known Doctors
      </Text>
      <View style={{borderRadius:5,borderWidth:2,borderColor:"lightgray",flex:1}}>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        vertical
        pagingEnabled
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        snapToAlignment="start"
        removeClippedSubviews={true} 
        initialNumToRender={1} 
      />

      </View>
    </View>
  );
};

export default DetailCard;
