import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import BookingComponents from "~/app/components/BookingComponents";

const Page = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BookingComponents />
    </SafeAreaView>
  );
};

export default Page;
