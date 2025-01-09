import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnBoarding from './onboarding/onBoarding';
import Home from './screens/Home';
import NewsScreen from './screens/NewsScreen';
import BudgetScreen from './screens/BudgetScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='onboarding'>
        <Stack.Screen name='onboarding' options={{headerShown: false}} component={OnBoarding}/>
        <Stack.Screen name='Home' options={{headerShown: false}} component={Home}/>
        <Stack.Screen name='News' options={{headerShown: false}} component={NewsScreen}/>
        <Stack.Screen name='Budget' options={{headerShown: false}} component={BudgetScreen}/>

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
