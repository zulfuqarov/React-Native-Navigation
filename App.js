// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
import { createContext, useState } from "react";
import { ContextReact } from "./Context/Context";
// nagivations start
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();

// screens import
import Modal from "./screens/Modal";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import Register from "./screens/Register";

// state start

export default function App() {
  const [show, setshow] = useState(true);
  return (
    <ContextReact.Provider value={{ show, setshow }}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Modal" component={Modal} />
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen
            options={{ headerShown: show }}
            name="Profile"
            component={Profile}
          />
          <Drawer.Screen name="Register" component={Register} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ContextReact.Provider>
  );
}
