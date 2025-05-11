import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAuth} from '../hooks/authentication';
import {HomeTabs} from './hometabs';
import AuthStack from './auth/AuthStack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const {isAuth} = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isAuth ? (
          <Stack.Screen name="Home" component={HomeTabs} />
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {RootNavigator};
