import { View, Text } from "react-native";
import React, { useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { ContextReact } from "../../Context/Context";
const Profil2 = () => {
  const navigation = useNavigation();
  const context = useContext(ContextReact);
  useEffect(() => {
    const unsubscribe = navigation.addListener("beforeRemove", (e) => {
      context.setshow(true);
    });

    // useEffect temizleme fonksiyonu
    return () => {
      unsubscribe();
    };
  }, [navigation]);
  return (
    <View>
      <Text>Profil2</Text>
    </View>
  );
};

export default Profil2;
