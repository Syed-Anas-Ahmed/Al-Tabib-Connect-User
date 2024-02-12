import { View } from "react-native";
import React from "react";
import InputField from "./InputField";
import CusButton from "./CusButton";

import GenderPick from "./GenderPick";
import DatePicker from "./DatePicker";
import { form } from "../constants";

const Form = () => {
  return (
    <View style={form.layout}>
      <InputField icon="phone" placeholder="Enter Your Phone" />
      <InputField icon="user" placeholder="Enter Your Name" />
      <InputField icon="lock" placeholder="Enter Your Password" />
      <GenderPick/>
      <DatePicker/>
      <CusButton btnText="Login"></CusButton>
    </View>
  );
};

export default Form;
