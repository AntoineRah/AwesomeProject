import {AuthState} from './AuthStore.type';
import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import {secureStorage} from '../../storage';

import ms, {StringValue} from 'ms';

export const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      accessToken: null,
      refreshToken: null,
      expiresAt: null,
      hydrated: false,
      setTokens: (accessToken, refreshToken, expiresIn) => {
        const expiresAt = Date.now() + ms(expiresIn as StringValue);
        set({accessToken, refreshToken, expiresAt});
      },
      clearTokens: () =>
        set({
          accessToken: null,
          refreshToken: null,
          expiresAt: null,
        }),
        setHydratedStorage: (isHydrated:boolean) => set({hydrated:isHydrated} ),
    }),
    {
      name: 'auth-storage',
      storage: secureStorage,
      onRehydrateStorage: () => (state, _error) => {
        state?.setHydratedStorage(true);
      },
    },
  ),
);
