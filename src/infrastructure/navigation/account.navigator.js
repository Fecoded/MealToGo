import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { AccountScreen } from "../../features/account/screens/account.screen";
import { LoginScreen } from "../../features/account/screens/login.screen";
import { RegisterScreen } from "../../features/account/screens/register.screen";

const stack = createStackNavigator();

export const AccountNavigator = () => (
  <stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <stack.Screen name="Main" component={AccountScreen} />
    <stack.Screen name="Login" component={LoginScreen} />
    <stack.Screen name="Register" component={RegisterScreen} />
  </stack.Navigator>
);
