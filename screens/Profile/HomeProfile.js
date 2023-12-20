import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { ContextReact } from "../../Context/Context";
const HomeProfile = () => {
  const context = useContext(ContextReact);
  const navigation = useNavigation();

  const Profile1 = () => {
    navigation.navigate("Profile1");
    context.setshow(false);
  };
  const Profile2 = () => {
    navigation.navigate("Profil2");
    context.setshow(false);
  };
  return (
    <View>
      <Text>HomeProfile</Text>
      <TouchableOpacity onPress={Profile1}>
        <Text>Profile1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={Profile2}>
        <Text>Profile2</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeProfile;
