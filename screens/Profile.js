import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Stack = createStackNavigator();

import HomeProfile from "./Profile/HomeProfile";
import Profile1 from "./Profile/Profile1";
import Profil2 from "./Profile/Profil2";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="HomeProfile"
        options={{
          headerShown: false,
          animationEnabled: false,
        }}
        component={HomeProfile}
      />
      <Stack.Screen
        name="Profile1"
        component={Profile1}
        options={{
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="Profil2"
        component={Profil2}
        options={{
          animationEnabled: false,
          headerLeft: () => (
            <TouchableOpacity className='px-[10px]'
              onPress={() => navigation.navigate("HomeProfile")}
            >
              <AntDesign className='py-[10px]' name="left" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default Profile;
