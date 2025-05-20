import React from 'react';
import {RootNavigator} from './src/navigation';
import {AuthProvider} from './src/hooks/authentication';
import {ThemeProvider} from './src/hooks/theme';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RootNavigator />
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
export default App;
