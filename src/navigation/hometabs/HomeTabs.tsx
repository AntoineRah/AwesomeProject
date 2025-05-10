import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainStack} from '../main';
import {SettingsScreen} from '../../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {ColorValue} from 'react-native';

const Tab = createBottomTabNavigator();

const showTabIcon = (name: string, color: ColorValue, size: number) => {
  <Icon name={name} color={color} size={size} />;
};

const HomeTabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={MainStack}
        options={{
          tabBarIcon: ({color, size}) =>
            showTabIcon('home-outline', color, size),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color, size}) =>
            showTabIcon('settings-outline', color, size),
        }}
      />
    </Tab.Navigator>
  );
};

export {HomeTabs};
