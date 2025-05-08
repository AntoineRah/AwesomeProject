import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignupScreen} from './src/screens/SignupScreen';
import {LoginScreen} from './src/screens/LoginScreen';
import type {RootStackParamList} from './src/screens/type';
import {VerificationForm} from './src/components/organisms/VerificationForm';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="OTP" component={VerificationForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
