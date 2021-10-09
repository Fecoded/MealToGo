import React, { useState, useEffect } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import * as firebase from "firebase";

import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import { Navigation } from "./src/infrastructure/navigation";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

// const TAB_ICONS = {
//   Restaurants: "md-restaurant",
//   Map: "md-map",
//   Settings: "md-settings",
// }

// const tabBarIcon = (iconName) = ({ size, color }) => <Ionicons name={iconName} size={size} color={color} />;
// const screenOptions = ({ route }) => {
//   const iconName =  TAB_ICONS[route.name]
//   return {
//     tabBarIcon: tabBarIcon(iconName)
//   }
// }

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDsrqGUe39L_T44sPb8TIYJJpIeOuE2rq8",
  authDomain: "mealtogo-add41.firebaseapp.com",
  projectId: "mealtogo-add41",
  storageBucket: "mealtogo-add41.appspot.com",
  messagingSenderId: "815062606414",
  appId: "1:815062606414:web:478159fdcd0bd14942991f",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      firebase
        .auth()
        .signInWithEmailAndPassword("mo@binni.io", "test123")
        .then((user) => {
          setIsAuthenticated(true);
        })
        .catch((e) => {
          console.log(e);
        });
    }, 2000);
  }, []);

  const [oswaldLoaded] = useFonts({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
