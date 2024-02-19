import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { paddings, gradient, fonts, FontColors, themeColors } from './constants'
import BookingComponents from './components/BookingComponents'
import { Text } from 'react-native'

const BookAppointment = () => {
  return (
    <LinearGradient
      colors={["#08B89D", "#D2F9F1"]}
      style={[paddings.primaryPad, gradient.linear]}
    >
      <SafeAreaView style={{ flex: 1, padding: 15, alignItems:"center" }}>
        <Text style={[fonts.heading,FontColors.whiteFont,]}>Select Patient</Text>
        <BookingComponents/>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default BookAppointment