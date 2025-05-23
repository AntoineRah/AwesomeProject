import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {useAuthStore} from '../hooks/authentication/AuthStore';
import {HomeTabs} from './hometabs';
import AuthStack from './auth/AuthStack';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const accessToken = useAuthStore(state => state.accessToken);
  console.log(useAuthStore.getState());

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {accessToken ? (
          <Stack.Screen name="Home" component={HomeTabs} />
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {RootNavigator};
