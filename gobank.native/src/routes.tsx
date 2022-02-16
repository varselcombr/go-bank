import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Enter } from "./screens/Enter";
import { Home } from "./screens/Home";
import { propsNavigationStack } from "./Models";

const {Navigator, Screen} = createNativeStackNavigator<propsNavigationStack>()

export default function Routes() {
	return (
      <NavigationContainer>
         <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Screen name="Enter" component={Enter} />
            <Screen name="Home" component={Home} />
         </Navigator>
      </NavigationContainer>
   );
}