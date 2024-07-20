import React from "react";
import { View, SafeAreaView, Text } from "react-native";
import tw from "tailwind-react-native-classnames";

export const MapScreen = () => {
  return (
    <SafeAreaView>
      <View style={tw`p-5`}>
        <Text>Map Screen here</Text>
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;
