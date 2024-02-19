import {Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { BlurView } from 'expo-blur';
import DateTimePicker, { DateType } from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import { Modal } from 'react-native';
import { useState } from 'react';
import { inputStyles,fonts,FontColors,dateModal } from '../constants';


interface DatePickerProps {
  onDateChange: (date: DateType) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ onDateChange }) => {
    const [datevalue, setdateValue] = useState<DateType>(dayjs());
    const [showModal, setShowModal] = useState(false);
    const [DateVisible, setDateVisible] = useState(false)

    const currDate = datevalue ? dayjs(datevalue).format("MMMM DD, YYYY") : "Choose your Date of Birth";

    const OpenModal = () => {
        setShowModal(!showModal);
        setDateVisible(true)
    }

    const handleDateChange = (date: DateType) => {
      setdateValue(date);
      onDateChange(date);
    };
        

  return (
    <View style={{ paddingVertical: 30 }}>
    <View style={inputStyles.userField}>
      <AntDesign name="calendar" size={20} color="#0ab99c" />
      <TouchableOpacity
        style={dateModal.button}
        onPress={() => OpenModal()}
      >
        <Text style={[fonts.normal,FontColors.whiteFont]}>{DateVisible ? currDate:"Choose Date of Birth"}</Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        visible={showModal}
        animationType="fade"
        onRequestClose={() => setShowModal(false)}
      >
        <BlurView
          style={dateModal.modalBlurContainer}
          experimentalBlurMethod="dimezisBlurView"
        >
          <View style={dateModal.modalContainer}>
            <DateTimePicker
              selectedItemColor="#0ab99c"
              value={datevalue}
              locale={"en"}
              onValueChange={(date) => handleDateChange(date)}
              mode="date"
            />
            <View style={dateModal.footerContainer}>
              {/* Button to close modal */}
              <Pressable
                onPress={() => setShowModal(false)}
                style={dateModal.closeButton}
              >
                <Text style={dateModal.closeButtonText}>Close</Text>
              </Pressable>
            </View>
          </View>
        </BlurView>
      </Modal>
    </View>
  </View>
  )
}

export default DatePicker