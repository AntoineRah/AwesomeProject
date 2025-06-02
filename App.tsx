import React from 'react';
import {RootNavigator} from './src/navigation';
import {ThemeProvider} from './src/hooks/theme';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {useAuthStore} from './src/hooks/authentication';
import {SplashScreen} from './src/screens/SplashScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
//import {getNewTokens as refreshAccessToken} from './src/api/auth';
const queryClient = new QueryClient();

//import {useEffect} from 'react';

// export function useAutoRefreshToken() {
//   const {refreshToken, expiresAt, setTokens, clearTokens} = useAuthStore();

//   useEffect(() => {
//     if (!refreshToken || !expiresAt) return;

//     const interval = setInterval(async () => {
//       const now = Date.now();
//       const timeLeft = expiresAt - now;

//       if (timeLeft < 60_000) {
//         try {
//           const data = await refreshAccessToken(refreshToken, '3m');
//           setTokens(
//             data.data.accessToken,
//             data.data.refreshToken,
//             data.data.expiresIn,
//           );
//         } catch (e) {
//           clearTokens();
//         }
//       }
//     }, 30_000);

//     return () => clearInterval(interval);
//   }, [refreshToken, expiresAt, setTokens, clearTokens]);
// }
const App = () => {
  const hydrated = useAuthStore(state => state.hydrated);
  if (!hydrated) {
    return <SplashScreen />;
  }
  return (
    <ThemeProvider>
      <GestureHandlerRootView>
        <QueryClientProvider client={queryClient}>
          <RootNavigator />
        </QueryClientProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
};
export default App;
