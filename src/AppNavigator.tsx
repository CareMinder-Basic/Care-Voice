import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Login';
import Start from './pages/Start';
import Home from './pages/Home';
import Intro from './pages/Intro';
import PatiLogin from './pages/PatiLogin';
import Terms from './pages/Terms';
import Userguide from './pages/Userguide';


const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Start" component={Start} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }}/>
        <Stack.Screen name="PatiLogin" component={PatiLogin} options={{ headerShown: false }}/>
        <Stack.Screen name="Terms" component={Terms} options={{ headerShown: false }}/>
        <Stack.Screen name="Userguide" component={Userguide} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;