import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, NotificationStackNavigator } from "./StackNavigator";
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Notification" component={NotificationStackNavigator} />
    </Tab.Navigator>
  );
};
export default TabNavigator;