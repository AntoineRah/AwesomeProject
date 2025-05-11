import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainStack} from '../main';
import {SettingsScreen} from '../../screens/SettingsScreen';
import {HomeTabParamList} from './HomeTabs.type';
import {useTheme} from '../../hooks/theme';

const Tab = createBottomTabNavigator<HomeTabParamList>();

const HomeTabs = () => {
  const {colors} = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.background,
          elevation: 10,
        },
      }}>
      <Tab.Screen
        name="Main"
        component={MainStack}
        options={{tabBarLabel: 'Main', tabBarIcon: () => null}}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{tabBarLabel: 'Home', tabBarIcon: () => null}}
      />
    </Tab.Navigator>
  );
};

export {HomeTabs};
