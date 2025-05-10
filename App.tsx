import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './src/navigation';
import {AuthProvider} from './src/hooks/authentication';
import {ThemeProvider} from './src/hooks/theme';

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </AuthProvider>
    </ThemeProvider>
  );
};
export default App;
