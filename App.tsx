import React from 'react';
import {RootNavigator} from './src/navigation';
import {AuthProvider} from './src/hooks/authentication';
import {ThemeProvider} from './src/hooks/theme';

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
    </ThemeProvider>
  );
};
export default App;
