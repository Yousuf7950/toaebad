import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ParentScreen from './components/screens/ParentScreen';
import LoginScreen from './components/screens/LoginScreen';
import HomeScreen from './components/screens/Home';
import AppointmentScreen from './components/screens/AppointmentScreen';
import TroubleshootScreen from './components/screens/TroubleshootScreen';
import MechanicScreen from './components/screens/MechanicScreen';
import ServiceScreen from './components/screens/ServiceScreen';
import RecordScreen from './components/screens/RecordScreen'; 
import SettingScreen from './components/screens/SettingScreen';
// import AppointmentTaking from './components/screens/AppointmentTaking';
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Parent" component={ParentScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="Appointment" component={AppointmentScreen}/>
    <Stack.Screen name="Trouble" component={TroubleshootScreen}/>
    <Stack.Screen name="Mechanic" component={MechanicScreen}/>
    <Stack.Screen name="Service" component={ServiceScreen}/>
    <Stack.Screen name="Record" component={RecordScreen}/>
    <Stack.Screen name="Setting" component={SettingScreen}/>
    {/* <Stack.Screen name="Appointment taking" component={AppointmentTaking}/> */}

  
  </Stack.Navigator>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
