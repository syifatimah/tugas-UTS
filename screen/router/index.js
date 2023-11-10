import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import {Home, Splash, Akun, Pesanan} from '../pages';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="dashboard" component={Home} />
        <Tab.Screen name="barang" component={Pesanan} />
        <Tab.Screen name="info" component={Akun} />
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