import React from 'react';
import AppNavigator from './src/AppNavigator';
import { StatusBar } from 'react-native';

const App: React.FC = () => {
  return (
  <>
    <StatusBar hidden={true} />
    <AppNavigator />
  </>
  );
};

export default App;