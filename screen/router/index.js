import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import {dashboard, barang, info} from '../pages';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="dashboard" component={dashboard} />
        <Tab.Screen name="barang" component={barang} />
        <Tab.Screen name="info" component={info} />
      </Tab.Navigator>
  )
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown:  false }} />
        <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown:  false }} />
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})