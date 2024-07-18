import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Login';
import PatiLogin from './pages/PatiLogin';
import Terms from './pages/Terms';
import Userguide from './pages/Userguide';
import Home from './pages/Home';
import Recode from './pages/Recode';
import Intro from './pages/Intro';
import Start from './pages/Start';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Start" component={Start} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }}/>
        <Stack.Screen name="PatiLogin" component={PatiLogin} options={{ headerShown: false }}/>
        <Stack.Screen name="Terms" component={Terms} options={{ headerShown: false }}/>
        <Stack.Screen name="Userguide" component={Userguide} options={{ headerShown: false }}/>
        <Stack.Screen name="Recode" component={Recode} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;