import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { paddings, gradient, fonts, FontColors, themeColors } from './constants'
import { Text } from 'react-native'
import GetAppComponent from './components/GetAppComponent'
import { colors } from './styles'

const BookAppointment = () => {
  return (
    <LinearGradient
      locations={[0.3, 0.5, 0.8]}
      colors={[colors.gradPrim, "white", colors.gradSec]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1, padding: 15, alignItems:"center" }}>
        <Text style={[fonts.heading,FontColors.whiteFont,]}>Select Patient</Text>
        <GetAppComponent/>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default BookAppointment